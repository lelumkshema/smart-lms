import os
import json
import numpy as np
import pandas as pd

def generate_student_engagement_data(output_path="smart_lms/backend/student_data.json", num_students=200, seed=42):
    """
    Generates synthetic university student engagement logs and academic records
    for Educational Data Mining (EDM) and dropout risk prediction.
    """
    np.random.seed(seed)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    data = []
    
    courses = ["CS101 - Intro to Computer Science", "SE302 - Software Architecture", "AI401 - Artificial Intelligence & Data Science", "ICT204 - Database Management Systems"]
    
    for i in range(num_students):
        student_id = f"UOP_{202400 + i}"
        attendance_pct = float(np.clip(np.random.normal(loc=82, scale=12), 40, 100))
        assignment_avg = float(np.clip(np.random.normal(loc=75, scale=15), 30, 100))
        quiz_avg = float(np.clip(np.random.normal(loc=72, scale=18), 20, 100))
        lms_logins_per_week = int(np.clip(np.random.poisson(lam=14), 2, 35))
        forum_posts = int(np.clip(np.random.poisson(lam=5), 0, 20))
        submission_delay_hours = float(np.clip(np.random.exponential(scale=6), 0, 48))
        
        # Synthetic GPA / Final Grade Score Calculation
        score = (0.35 * assignment_avg) + (0.35 * quiz_avg) + (0.20 * attendance_pct) + (0.10 * min(lms_logins_per_week * 3, 100)) - (0.5 * submission_delay_hours)
        score = float(np.clip(score, 0, 100))
        
        if score >= 80:
            final_grade = "A"
            gpa = 4.0
            risk_level = "Low"
        elif score >= 65:
            final_grade = "B"
            gpa = 3.0
            risk_level = "Low"
        elif score >= 50:
            final_grade = "C"
            gpa = 2.0
            risk_level = "Medium"
        else:
            final_grade = "F"
            gpa = 0.0
            risk_level = "High"
            
        data.append({
            "student_id": student_id,
            "course": np.random.choice(courses),
            "attendance_pct": round(attendance_pct, 1),
            "assignment_avg": round(assignment_avg, 1),
            "quiz_avg": round(quiz_avg, 1),
            "lms_logins_per_week": lms_logins_per_week,
            "forum_posts": forum_posts,
            "submission_delay_hours": round(submission_delay_hours, 1),
            "score": round(score, 1),
            "final_grade": final_grade,
            "gpa": gpa,
            "risk_level": risk_level
        })
        
    with open(output_path, "w") as f:
        json.dump(data, f, indent=2)
        
    print(f"[SmartLMS Dataset] Successfully generated {num_students} student records at '{output_path}'.")
    return output_path

if __name__ == "__main__":
    generate_student_engagement_data()
