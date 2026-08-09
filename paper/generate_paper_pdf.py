import os
import re
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT

def generate_pdf_from_markdown(md_file="smart_lms/paper/paper.md", pdf_output="Research_Paper_SmartLMS.pdf"):
    print(f"[SmartLMS PDF Generator] Compiling '{md_file}' into '{pdf_output}'...")
    
    doc = SimpleDocTemplate(
        pdf_output,
        pagesize=letter,
        rightMargin=54,
        leftMargin=54,
        topMargin=54,
        bottomMargin=54
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=17,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0F172A"),
        spaceAfter=10
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#475569"),
        spaceAfter=15
    )
    
    abstract_style = ParagraphStyle(
        'DocAbstract',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=13.5,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor("#1E293B"),
        backColor=colors.HexColor("#F8FAFC"),
        borderColor=colors.HexColor("#CBD5E1"),
        borderWidth=1,
        borderPadding=10,
        spaceAfter=15
    )
    
    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor("#0F172A"),
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor("#334155"),
        spaceAfter=8
    )
    
    code_style = ParagraphStyle(
        'Code_Custom',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor("#0F172A"),
        backColor=colors.HexColor("#F1F5F9"),
        borderColor=colors.HexColor("#E2E8F0"),
        borderWidth=0.5,
        borderPadding=6,
        spaceAfter=8
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.white
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#1E293B")
    )

    story = []
    
    with open(md_file, "r", encoding="utf-8") as f:
        content = f.read()

    lines = content.split("\n")
    i = 0
    in_abstract = False
    abstract_text = ""
    in_code = False
    code_text = ""
    
    while i < len(lines):
        line = lines[i].strip()
        
        if line.startswith("# "):
            title_text = line[2:].strip()
            story.append(Paragraph(title_text, title_style))
            story.append(Spacer(1, 4))
        elif line.startswith("**Author(s):**"):
            authors = line
            next_line = lines[i+1].strip() if i+1 < len(lines) else ""
            sub = f"{authors} | {next_line}"
            story.append(Paragraph(sub, subtitle_style))
            story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#CBD5E1"), spaceAfter=12))
            i += 1
        elif line.startswith("## Abstract"):
            in_abstract = True
            abstract_text = ""
        elif in_abstract:
            if line.startswith("## ") or line.startswith("---"):
                in_abstract = False
                story.append(Paragraph(f"<b>Abstract—</b> {abstract_text}", abstract_style))
                story.append(Spacer(1, 6))
                continue
            else:
                if line:
                    abstract_text += " " + line
        elif line.startswith("```"):
            if in_code:
                in_code = False
                story.append(Paragraph(code_text.replace("\n", "<br/>").replace(" ", "&nbsp;"), code_style))
                code_text = ""
            else:
                in_code = True
                code_text = ""
        elif in_code:
            code_text += line + "\n"
        elif line.startswith("## "):
            h_text = line[3:].strip()
            story.append(Paragraph(h_text, h1_style))
        elif line.startswith("|"):
            table_data = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                tline = lines[i].strip()
                if "---" in tline:
                    i += 1
                    continue
                cells = [c.strip() for c in tline.split("|")[1:-1]]
                row = []
                for cell in cells:
                    cell_clean = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', cell)
                    if len(table_data) == 0:
                        row.append(Paragraph(cell_clean, table_header_style))
                    else:
                        row.append(Paragraph(cell_clean, table_cell_style))
                table_data.append(row)
                i += 1
            i -= 1
            
            t = Table(table_data, colWidths=[200, 90, 110, 100])
            t.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#0F172A")),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
                ('TOPPADDING', (0, 0), (-1, -1), 6),
                ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#CBD5E1")),
                ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor("#F8FAFC")])
            ]))
            story.append(Spacer(1, 6))
            story.append(t)
            story.append(Spacer(1, 8))
        elif line and not line.startswith("---") and not line.startswith("**Index Terms"):
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
            p_text = re.sub(r'\*(.*?)\*', r'<i>\1</i>', p_text)
            p_text = re.sub(r'\$(.*?)\$', r'<i>\1</i>', p_text)
            story.append(Paragraph(p_text, body_style))
            
        i += 1

    doc.build(story)
    print(f"[SmartLMS PDF Generator] Successfully rendered PDF paper at '{pdf_output}'.")
    return pdf_output

if __name__ == "__main__":
    generate_pdf_from_markdown()
