INSERT INTO hospitals (id, code, name) VALUES
('11111111-1111-1111-1111-111111111111', 'asoke', 'Asoke Hospital'),
('22222222-2222-2222-2222-222222222222', 'ohm', 'Ohm Hospital');

INSERT INTO patients (id, hospital_id, patient_identifier, hn, first_name, last_name, gender, birth_date) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', '11111111-1111-1111-1111-111111111111', 'PID-A001', 'HN-A001', 'ake', 'asoke', 'male', '2001-02-14'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', '11111111-1111-1111-1111-111111111111', 'PID-A002', 'HN-A002', 'mali', 'sukjai', 'female', '1998-07-09'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', '22222222-2222-2222-2222-222222222222', 'PID-O001', 'HN-O001', 'ohm', 'nahhh', 'male', '2000-11-21'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', '22222222-2222-2222-2222-222222222222', 'PID-O002', 'HN-O002', 'fah', 'rakdee', 'female', '1996-04-03');

INSERT INTO encounters (id, patient_id, encounter_identifier, status, encounter_class, reason_text, service_provider_name, start_time, end_time) VALUES
('e1111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'ENC-A001-01', 'finished', 'AMB', 'Fever and sore throat', 'Asoke Hospital OPD', '2026-03-10 09:00:00', '2026-03-10 09:40:00'),
('e1111111-1111-1111-1111-111111111112', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'ENC-A001-02', 'finished', 'AMB', 'Follow-up visit', 'Asoke Hospital OPD', '2026-03-17 10:00:00', '2026-03-17 10:20:00'),

('e1111111-1111-1111-1111-111111111113', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'ENC-A002-01', 'finished', 'AMB', 'Headache', 'Asoke Hospital General Clinic', '2026-03-11 13:00:00', '2026-03-11 13:25:00'),
('e1111111-1111-1111-1111-111111111114', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'ENC-A002-02', 'finished', 'AMB', 'Medication refill', 'Asoke Hospital General Clinic', '2026-03-20 14:00:00', '2026-03-20 14:10:00'),

('e2222222-2222-2222-2222-222222222201', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2021-01', 'finished', 'AMB', 'COVID-19 screening with fever, cough, and sore throat', 'Ohm Hospital Acute Respiratory Clinic', '2021-08-14 09:00:00', '2021-08-14 09:45:00'),
('e2222222-2222-2222-2222-222222222202', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2021-02', 'finished', 'AMB', 'COVID-19 follow-up after home isolation', 'Ohm Hospital OPD', '2021-08-21 10:00:00', '2021-08-21 10:20:00'),

('e2222222-2222-2222-2222-222222222203', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2022-01', 'finished', 'AMB', 'Epigastric pain and gastritis symptoms', 'Ohm Hospital General Medicine Clinic', '2022-05-11 14:00:00', '2022-05-11 14:30:00'),
('e2222222-2222-2222-2222-222222222204', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2022-02', 'finished', 'AMB', 'Follow-up for gastritis and dyspepsia', 'Ohm Hospital General Medicine Clinic', '2022-05-25 13:30:00', '2022-05-25 13:50:00'),

('e2222222-2222-2222-2222-222222222205', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2023-01', 'finished', 'AMB', 'Seasonal allergic rhinitis with sneezing and runny nose', 'Ohm Hospital ENT Clinic', '2023-07-03 15:00:00', '2023-07-03 15:25:00'),
('e2222222-2222-2222-2222-222222222206', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2023-02', 'finished', 'AMB', 'Allergy follow-up and symptom review', 'Ohm Hospital ENT Clinic', '2023-07-17 15:10:00', '2023-07-17 15:25:00'),

('e2222222-2222-2222-2222-222222222207', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2024-01', 'finished', 'AMB', 'Migraine headache with photophobia', 'Ohm Hospital Neurology Clinic', '2024-02-09 11:00:00', '2024-02-09 11:35:00'),
('e2222222-2222-2222-2222-222222222208', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2024-02', 'finished', 'AMB', 'Migraine follow-up and medication adjustment', 'Ohm Hospital Neurology Clinic', '2024-02-23 10:40:00', '2024-02-23 11:00:00'),

('e2222222-2222-2222-2222-222222222209', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2025-01', 'finished', 'AMB', 'Viral pharyngitis with throat pain and low-grade fever', 'Ohm Hospital OPD', '2025-09-12 09:20:00', '2025-09-12 09:50:00'),
('e2222222-2222-2222-2222-222222222210', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2025-02', 'finished', 'AMB', 'Follow-up for throat symptoms and recovery check', 'Ohm Hospital OPD', '2025-09-19 09:30:00', '2025-09-19 09:45:00'),

('e2222222-2222-2222-2222-222222222221', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2026-01', 'finished', 'AMB', 'Cough and mild fever', 'Ohm Hospital OPD', '2026-03-09 08:30:00', '2026-03-09 09:05:00'),
('e2222222-2222-2222-2222-222222222222', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'ENC-O001-2026-02', 'finished', 'AMB', 'Review symptoms after medication', 'Ohm Hospital OPD', '2026-03-16 09:15:00', '2026-03-16 09:35:00'),

('e2222222-2222-2222-2222-222222222223', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'ENC-O002-01', 'finished', 'AMB', 'Allergic rhinitis', 'Ohm Hospital ENT Clinic', '2026-03-12 15:00:00', '2026-03-12 15:30:00'),
('e2222222-2222-2222-2222-222222222224', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'ENC-O002-02', 'finished', 'AMB', 'Follow-up allergy treatment', 'Ohm Hospital ENT Clinic', '2026-03-21 16:00:00', '2026-03-21 16:20:00');

INSERT INTO medication_requests (id, patient_id, medication_code, medication_name, status, intent, dosage_text, authored_on) VALUES
('e1111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'MED-PCM-500', 'Paracetamol 500 mg', 'active', 'order', 'Take 1 tablet by mouth every 6 hours after meals when needed for fever', '2026-03-10'),
('e1111111-1111-1111-1111-111111111112', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'MED-CTM-4', 'Chlorpheniramine 4 mg', 'active', 'order', 'Take 1 tablet by mouth 3 times daily after meals', '2026-03-10'),
('e1111111-1111-1111-1111-111111111113', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'MED-IBU-400', 'Ibuprofen 400 mg', 'active', 'order', 'Take 1 tablet by mouth after meals when headache occurs', '2026-03-11'),
('e1111111-1111-1111-1111-111111111114', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'MED-OMZ-20', 'Omeprazole 20 mg', 'active', 'order', 'Take 1 capsule before breakfast', '2026-03-20'),

('e2222222-2222-2222-2222-222222222201', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-PCM-500', 'Paracetamol 500 mg', 'completed', 'order', 'Take 1 tablet by mouth every 6 hours as needed for fever during COVID-19 illness', '2021-08-14'),
('e2222222-2222-2222-2222-222222222202', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-DXM-15', 'Dextromethorphan 15 mg', 'completed', 'order', 'Take 1 tablet by mouth 3 times daily for cough', '2021-08-14'),
('e2222222-2222-2222-2222-222222222203', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-VITC-500', 'Vitamin C 500 mg', 'completed', 'order', 'Take 1 tablet by mouth once daily after breakfast', '2021-08-14'),

('e2222222-2222-2222-2222-222222222204', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-OMZ-20', 'Omeprazole 20 mg', 'completed', 'order', 'Take 1 capsule by mouth 30 minutes before breakfast', '2022-05-11'),
('e2222222-2222-2222-2222-222222222205', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-ALH-SUSP', 'Aluminium Hydroxide Suspension', 'completed', 'order', 'Take 10 mL by mouth after meals and at bedtime for gastric discomfort', '2022-05-11'),

('e2222222-2222-2222-2222-222222222206', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-LOR-10', 'Loratadine 10 mg', 'completed', 'order', 'Take 1 tablet by mouth once daily for allergy symptoms', '2023-07-03'),
('e2222222-2222-2222-2222-222222222207', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-FLN-NS', 'Fluticasone Nasal Spray', 'completed', 'order', 'Use 2 sprays in each nostril once daily', '2023-07-03'),

('e2222222-2222-2222-2222-222222222208', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-IBU-400', 'Ibuprofen 400 mg', 'completed', 'order', 'Take 1 tablet by mouth after meals when migraine headache occurs', '2024-02-09'),
('e2222222-2222-2222-2222-222222222209', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-DOM-10', 'Domperidone 10 mg', 'completed', 'order', 'Take 1 tablet by mouth before meals when nausea occurs', '2024-02-09'),

('e2222222-2222-2222-2222-222222222210', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-AMX-500', 'Amoxicillin 500 mg', 'completed', 'order', 'Take 1 capsule by mouth 3 times daily for 5 days', '2025-09-12'),
('e2222222-2222-2222-2222-222222222211', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-PCM-500', 'Paracetamol 500 mg', 'completed', 'order', 'Take 1 tablet by mouth every 6 hours as needed for throat pain or fever', '2025-09-12'),

('e2222222-2222-2222-2222-222222222221', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-AMX-500', 'Amoxicillin 500 mg', 'active', 'order', 'Take 1 capsule by mouth 3 times daily for 5 days', '2026-03-09'),
('e2222222-2222-2222-2222-222222222222', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-DXM-15', 'Dextromethorphan 15 mg', 'active', 'order', 'Take 1 tablet by mouth 3 times daily for cough', '2026-03-09'),
('e2222222-2222-2222-2222-222222222223', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'MED-CTM-4', 'Chlorpheniramine 4 mg', 'active', 'order', 'Take 1 tablet by mouth 3 times daily after meals for runny nose', '2026-03-09'),

('e2222222-2222-2222-2222-222222222224', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'MED-LOR-10', 'Loratadine 10 mg', 'active', 'order', 'Take 1 tablet by mouth once daily before bedtime', '2026-03-12'),
('e2222222-2222-2222-2222-222222222225', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'MED-FLN-NS', 'Fluticasone Nasal Spray', 'active', 'order', 'Use 2 sprays in each nostril once daily', '2026-03-12');