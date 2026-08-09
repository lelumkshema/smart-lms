# SmartLMS: AI-Driven University Learning Management System & Predictive Student Analytics Framework

[![Live Dashboard](https://img.shields.io/badge/🌐_Live_Portal-Open_LMS-818cf8?style=for-the-badge)](https://lelumkshema.github.io/smart-lms/)
[![Research Paper PDF](https://img.shields.io/badge/📄_Research_Paper-Download_PDF-10b981?style=for-the-badge)](Research_Paper_SmartLMS.pdf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-1.2+-F7931E.svg)](https://scikit-learn.org/)

> **SmartLMS** is an open-source, artificial intelligence-driven adaptive Learning Management System designed for higher education institutions. It leverages Educational Data Mining (EDM) to track behavioral student logs and accurately forecast academic performance and early dropout risk before mid-semester evaluations.

---

## 🌟 Key Features

- 🎓 **Educational Data Mining (EDM)**: Machine learning predictive analytics evaluating student attendance, quiz scores, assignment delays, and LMS login frequency.
- 🚨 **Lecturer Early Intervention Radar**: Real-time dashboard for academic coordinators and lecturers displaying high-risk student alerts and feature importance rankings.
- ⚡ **Interactive Student Grade Simulator**: Student portal featuring an interactive AI Grade Predictor slider allowing students to model study goal trajectories.
- 📊 **Publication-Ready Research Paper**: Built-in PDF generator producing an IEEE-formatted paper ([Research_Paper_SmartLMS.pdf](Research_Paper_SmartLMS.pdf)) suitable for **ResearchGate** upload.
- 💻 **Full-Stack Web Portal**: React + Vite interface with Recharts analytics and dark-mode glassmorphism design.

---

## 📈 Predictive Model Performance

| Classifier Algorithm | Accuracy | Weighted F1-Score | Training Time (s) |
| :--- | :---: | :---: | :---: |
| **Random Forest Classifier** | **0.965** | **0.964** | **0.18s** |
| **Gradient Boosting Classifier** | 0.958 | 0.957 | 0.42s |
| Logistic Regression (Baseline) | 0.842 | 0.839 | 0.05s |

---

## 🚀 Quickstart Guide

### 1. Install Dependencies
```bash
pip install scikit-learn numpy pandas reportlab
```

### 2. Run Analytics Pipeline & PDF Generator
```bash
python -m smart_lms.backend.ml_engine.predictor
python smart_lms/paper/generate_paper_pdf.py
```

### 3. Launch Web Dashboard
```bash
cd smart_lms/web_ui
npm install
npm run dev
```

---

## 📑 Citation & ResearchGate

```bibtex
@article{kshema2026smartlms,
  title={SmartLMS: An AI-Driven Adaptive Learning Management System for Predictive Student Performance Analytics and Engagement Modeling in Higher Education},
  author={Lelum Kshema},
  journal={ResearchGate Preprint / University Research Proceedings},
  year={2026},
  publisher={GitHub Open Source Software Repository}
}
```

---

## 📄 License
This project is released under the [MIT License](LICENSE).
