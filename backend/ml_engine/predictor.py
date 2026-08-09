import os
import json
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score
from smart_lms.backend.ml_engine.dataset_generator import generate_student_engagement_data

def train_and_evaluate_smart_lms():
    print("=== Starting SmartLMS Predictive Analytics Pipeline ===")
    
    data_path = "smart_lms/backend/student_data.json"
    if not os.path.exists(data_path):
        data_path = generate_student_engagement_data(data_path)
        
    with open(data_path, "r") as f:
        records = json.load(f)
        
    X = []
    y_risk = []
    
    risk_mapping = {"Low": 0, "Medium": 1, "High": 2}
    
    for r in records:
        features = [
            r["attendance_pct"],
            r["assignment_avg"],
            r["quiz_avg"],
            r["lms_logins_per_week"],
            r["forum_posts"],
            r["submission_delay_hours"]
        ]
        X.append(features)
        y_risk.append(risk_mapping[r["risk_level"]])
        
    X = np.array(X)
    y_risk = np.array(y_risk)
    
    X_train, X_test, y_train, y_test = train_test_split(X, y_risk, test_size=0.2, random_state=42)
    
    # Train Random Forest Classifier
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    rf_preds = rf_model.predict(X_test)
    rf_acc = accuracy_score(y_test, rf_preds)
    rf_f1 = f1_score(y_test, rf_preds, average='weighted')
    
    # Train Gradient Boosting Classifier
    gb_model = GradientBoostingClassifier(n_estimators=100, random_state=42)
    gb_model.fit(X_train, y_train)
    gb_preds = gb_model.predict(X_test)
    gb_acc = accuracy_score(y_test, gb_preds)
    gb_f1 = f1_score(y_test, gb_preds, average='weighted')
    
    # Feature Importance
    feature_names = ["Attendance %", "Assignment Avg", "Quiz Avg", "Logins / Wk", "Forum Posts", "Submission Delay (hrs)"]
    importances = dict(zip(feature_names, [round(float(imp), 4) for imp in rf_model.feature_importances_]))
    
    results = {
        "RandomForest": {
            "accuracy": round(float(rf_acc), 4),
            "f1_score": round(float(rf_f1), 4)
        },
        "GradientBoosting": {
            "accuracy": round(float(gb_acc), 4),
            "f1_score": round(float(gb_f1), 4)
        },
        "feature_importances": importances
    }
    
    output_dir = "smart_lms/web_ui/public/benchmarks"
    os.makedirs(output_dir, exist_ok=True)
    benchmark_path = os.path.join(output_dir, "results.json")
    
    with open(benchmark_path, "w") as f:
        json.dump(results, f, indent=2)
        
    print(f"[SmartLMS Analytics] Random Forest Accuracy: {rf_acc:.4f} | F1: {rf_f1:.4f}")
    print(f"[SmartLMS Analytics] Gradient Boosting Accuracy: {gb_acc:.4f} | F1: {gb_f1:.4f}")
    print(f"[SmartLMS Analytics] Benchmark saved to '{benchmark_path}'.")
    return results

if __name__ == "__main__":
    train_and_evaluate_smart_lms()
