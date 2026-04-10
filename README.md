มีรายละเอียดดังนี้:

* **Hospital B (Ohm Hospital)** → เป็นฝั่งที่ “ขอข้อมูล”
* **Hospital A (Asoke Hospital)** → เป็นฝั่งที่ “ให้ข้อมูล”
* **HIE / FHIR Facade** → เป็นตัวกลางที่รับ request แล้วไปดึงข้อมูลจากระบบปลายทาง

---

### แนวคิดของระบบในโปรเจคนี้

ในโปรเจคนี้จะจำลองการทำงานโดยใช้ database เดียว แต่ยังคง logic แบบเดียวกับระบบจริง โดยใช้ `hospital_id` เพื่อแยกว่าแต่ละข้อมูลมาจากโรงพยาบาลใด

```text
React UI (Hospital B)
        ↓
HIE Backend (Node.js / Express)
        ↓
PostgreSQL (Mock HIS A + HIS B)
```

---

### การทำงานของระบบ (Flow)

1. ผู้ใช้ใช้งานผ่านหน้าเว็บของ **Hospital B (Ohm Hospital)**
2. ผู้ใช้กรอก HN หรือ Patient Identifier
3. UI ส่ง request ไปที่ **HIE (Backend)**
4. Backend ตรวจสอบว่า patient อยู่ที่โรงพยาบาลใด (Hospital A)
5. Backend ดึงข้อมูล:

   * Patient
   * Encounter
   * Medication
6. Backend แปลงข้อมูลให้อยู่ในรูปแบบ **FHIR JSON**
7. ส่งข้อมูลกลับไปยัง UI ของ Hospital B
8. UI แสดงผล พร้อมระบุว่า:

   * Requester = Hospital B
   * Source = Hospital A
   * Data = Read-only

---

### Data Ownership (สำคัญ)

ในระบบนี้มีแนวคิดเรื่องเจ้าของข้อมูล (Data Ownership) ดังนี้:

* Hospital B สามารถ **ดูข้อมูลของ Hospital A ได้**
* แต่ **ไม่สามารถแก้ไขข้อมูลของ Hospital A ได้โดยตรง**
* ข้อมูลที่แสดงใน UI จะถูกระบุว่าเป็น **External Data (Read-only)**

หาก Hospital B ต้องการแก้ไขข้อมูล จะต้อง:

1. ดึงข้อมูลจาก A
2. บันทึกเป็นข้อมูลใหม่ของ B
3. แก้ไขในระบบของ B เท่านั้น

---

### Why This Approach Still Represents HIS-HIS

แม้จะใช้ database เดียว แต่ระบบยังคงแนวคิด HIS-HIS เพราะ:

* มีการแยกข้อมูลของแต่ละโรงพยาบาลด้วย `hospital_id`
* มีการจำลองการ request ผ่าน HIE
* UI แสดงมุมมองของ “ผู้ขอข้อมูล (Hospital B)” อย่างชัดเจน
* มีการระบุแหล่งที่มาของข้อมูล (Source Hospital)

ดังนั้นระบบนี้จึงสามารถสื่อแนวคิดของการแลกเปลี่ยนข้อมูลระหว่างโรงพยาบาลได้ครบถ้วน แม้จะเป็น mock system

---

### Key UI Concept

หน้าเว็บถูกออกแบบให้เป็นมุมมองของ **Hospital B (Ohm Hospital)** โดยมีองค์ประกอบสำคัญดังนี้:

* 🔵 แสดงว่าเป็นระบบของ Hospital B
* 🟢 แสดงแหล่งข้อมูลว่าเป็น Hospital A
* 🔒 แสดงสถานะข้อมูลว่าเป็น Read-only
* 📊 แสดงข้อมูล Patient, Encounter และ Medication แยกเป็น section

ตัวอย่าง:

```text
Requester: Ohm Hospital (Hospital B)
Data Source: Asoke Hospital (Hospital A)
Status: External Data (Read-only)
```

---

## System Architecture

ภาพรวมของระบบสามารถอธิบายได้ดังนี้

```text
+---------------------------+
|   React UI (Hospital B)   |
|  Request Patient Data     |
+------------+--------------+
             |
             v
+---------------------------+
|  Node.js / Express (HIE)  |
|   FHIR Facade / API       |
+------------+--------------+
             |
             v
+---------------------------+
|      PostgreSQL DB        |
|  - Mock HIS A (Asoke)     |
|  - Mock HIS B (Ohm)       |
+---------------------------+
```

---

## Backend Flow

การทำงานของ backend สามารถสรุปได้ดังนี้:

1. UI ส่ง request:

   ```http
   GET /api/facade/search?identifier=PID-O001
   ```

2. Route รับ request (`facade.routes.js`)

3. Controller ทำหน้าที่ validate request (`facade.controller.js`)

4. Service ทำ logic หลัก (`facade.service.js`)

   * หา patient
   * หา hospital
   * ดึง encounter + medication
   * map เป็น FHIR

5. ส่ง response กลับไป UI

---

## Frontend Flow

1. ผู้ใช้กรอก HN หรือ Patient ID
2. React เรียก API ผ่าน `api.js`
3. Backend ส่งข้อมูลกลับมา
4. UI แสดง:

   * Patient Info
   * Encounter History
   * Medication
5. พร้อม label:

   * Requester Hospital
   * Source Hospital
   * Read-only status

---

## Summary

โปรเจคนี้เป็นการจำลองระบบ **Health Information Exchange (HIE)** โดย:

* ใช้ **FHIR** เป็นมาตรฐานข้อมูล
* ใช้ **Hospital B เป็นผู้ request**
* ใช้ **Hospital A เป็นแหล่งข้อมูล**
* ใช้ **Backend เป็นตัวกลาง (Facade)**

แม้จะเป็น mock system แต่สามารถแสดงแนวคิดของระบบแลกเปลี่ยนข้อมูลสุขภาพได้ครบถ้วน และใกล้เคียงระบบจริง

````


