# SmartLMS: An AI-Driven Adaptive Learning Management System for Predictive Student Performance Analytics and Engagement Modeling in Higher Education

**Author(s):** Lelum Kshema  
**Institution:** Faculty of Engineering / Department of Computer Engineering, University of Peradeniya  
**Date:** August 2026  
**Target Repository:** ResearchGate Preprint / IEEE Transactions on Learning Technologies  

---

## Abstract
The rapid digitisation of higher education has generated vast volumes of behavioral engagement logs within Learning Management Systems (LMS). However, traditional LMS platforms function primarily as static content repositories rather than proactive pedagogical tools. In this paper, we present **SmartLMS**, an artificial intelligence-driven adaptive learning management platform that integrates real-time behavioral analytics with predictive machine learning models to forecast academic performance and identify early student dropout risk. Using Educational Data Mining (EDM) techniques, SmartLMS evaluates multi-dimensional student engagement metrics—including attendance percentages, assignment submission velocity, quiz scores, portal login frequency, and discussion forum participation. Comparative evaluations of Ensemble Machine Learning algorithms demonstrate that Random Forest and Gradient Boosting Classifiers achieve predictive accuracies of 96.5% and 95.8% respectively in categorizing student risk tiers (High, Medium, Low) prior to midterm evaluations. Furthermore, SmartLMS incorporates an interactive web portal featuring real-time risk radar alerts for university lecturers and personalized grade predictors for students. This open-source framework provides a scalable model for data-informed interventions in modern higher education.

**Index Terms—** Educational Data Mining (EDM), Learning Analytics, Predictive Student Analytics, Adaptive LMS, Machine Learning in Higher Education, Risk Forecasting, Random Forest.

---

## I. Introduction
The higher education sector increasingly relies on digital Learning Management Systems (LMS) to deliver courseware, facilitate assessments, and manage student interactions. Despite widespread adoption, academic institutions face persistent challenges regarding student retention, timely intervention for struggling learners, and personalized feedback delivery in large cohort courses.

Traditional LMS implementations suffer from three core limitations:
1. **Passive Data Collection:** Behavioral data is logged for audit trails rather than actively converted into actionable pedagogical insights.
2. **Delayed Intervention:** Academic risk is frequently identified only after summative end-of-semester examinations, precluding early remedial support.
3. **Lack of Explainable Risk Metrics:** Lecturers lack visual diagnostic tools to isolate specific behavioral causes of academic underperformance.

To mitigate these challenges, **SmartLMS** introduces an end-to-end predictive learning analytics pipeline integrated into an intuitive web cockpit for academic coordinators, lecturers, and undergraduate students.

---

## II. Methodology & System Architecture

### A. Mathematical Formulation
Let $\mathcal{S}_i = \{x_{i1}, x_{i2}, \dots, x_{im}\}$ represent the behavioral engagement vector for student $i$, where feature variables include:
- $x_{i1}$: Lecture Attendance Percentage ($\%$)
- $x_{i2}$: Assignment Average Score ($\%$)
- $x_{i3}$: Quiz Assessment Mean ($\%$)
- $x_{i4}$: Weekly LMS Login Velocity ($f_{\text{login}}$)
- $x_{i5}$: Peer Forum Contributions ($n_{\text{post}}$)
- $x_{i6}$: Mean Submission Delay ($\Delta t_{\text{delay}}$ in hours)

The composite academic performance index $P_i$ is formulated as:
$$P_i = w_1 x_{i1} + w_2 x_{i2} + w_3 x_{i3} + w_4 \min(3 x_{i4}, 100) - \gamma \Delta t_{\text{delay}}$$

where weighting parameters are set based on empirical domain validation ($w_1=0.20, w_2=0.35, w_3=0.35, w_4=0.10, \gamma=0.5$).

### B. Machine Learning Risk Classification
Students are categorized into discrete risk tiers $Y_i \in \{\text{Low Risk}, \text{Medium Risk}, \text{High Risk}\}$:
$$Y_i = \begin{cases} \text{Low Risk}, & \text{if } P_i \ge 65 \\ \text{Medium Risk}, & \text{if } 50 \le P_i < 65 \\ \text{High Risk}, & \text{if } P_i < 50 \end{cases}$$

Ensemble models (Random Forest with $T=100$ decision trees and Gradient Boosted Trees) were trained on student behavioral vectors to predict early-stage risk categories.

---

## III. Experimental Benchmarks

The predictive models were evaluated on a synthetic university student cohort ($N=200$) mirroring actual course engagement distributions.

### Table I: Classifier Performance Comparison
| Classifier Algorithm | Accuracy | Weighted F1-Score | Training Time (s) |
| :--- | :---: | :---: | :---: |
| **Random Forest Classifier** | **0.965** | **0.964** | **0.18s** |
| **Gradient Boosting Classifier** | 0.958 | 0.957 | 0.42s |
| Logistic Regression (Baseline) | 0.842 | 0.839 | 0.05s |

### Feature Importance Ranking
1. **Quiz Assessment Mean ($x_3$):** 36.4% Relative Importance
2. **Assignment Average Score ($x_2$):** 32.1% Relative Importance
3. **Lecture Attendance Percentage ($x_1$):** 18.2% Relative Importance
4. **LMS Login Velocity ($x_4$):** 8.5% Relative Importance

---

## IV. Discussion & Practical Implementation
1. **Early Academic Intervention:** By executing predictive risk classification at Week 4 of a semester, academic coordinators can issue automated support alerts to students exhibiting high-risk trajectories.
2. **Personalized Student Dashboard:** Students gain access to an interactive "Grade Simulator", enabling them to model how improving submission timeliness or quiz preparation impacts their final GPA category.
3. **Scalability:** The Python REST API handles multi-course analytical workloads efficiently, rendering real-time risk radars across large university faculties.

---

## V. Conclusion
**SmartLMS** demonstrates that integrating predictive machine learning with modern learning management interfaces significantly enhances early intervention capabilities in higher education. Future work will incorporate Natural Language Processing (NLP) to analyze student forum sentiment and text submission quality.

---

## References & Citation
```bibtex
@article{kshema2026smartlms,
  title={SmartLMS: An AI-Driven Adaptive Learning Management System for Predictive Student Performance Analytics and Engagement Modeling in Higher Education},
  author={Lelum Kshema},
  journal={ResearchGate Preprint / University Research Proceedings},
  year={2026},
  publisher={GitHub Open Source Software Repository}
}
```
