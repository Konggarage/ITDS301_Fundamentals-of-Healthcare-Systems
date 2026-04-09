CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DROP TABLE IF EXISTS medication_requests;
DROP TABLE IF EXISTS encounters;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS hospitals;

CREATE TABLE hospitals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID NOT NULL REFERENCES hospitals(id) ON DELETE CASCADE,
    patient_identifier VARCHAR(100) NOT NULL UNIQUE,
    hn VARCHAR(100) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE encounters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    encounter_identifier VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(50) NOT NULL,
    encounter_class VARCHAR(50) NOT NULL,
    reason_text VARCHAR(255) NOT NULL,
    service_provider_name VARCHAR(255) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL
);

CREATE TABLE medication_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    medication_code VARCHAR(100) NOT NULL,
    medication_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    intent VARCHAR(50) NOT NULL,
    dosage_text VARCHAR(255) NOT NULL,
    authored_on DATE NOT NULL
);