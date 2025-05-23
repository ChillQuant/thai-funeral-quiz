export const questions = [
  // Section 1: Inner Reflection
  {
    id: 1,
    question: "หากคุณหลับตาและนึกถึงวันสุดท้ายของชีวิต คุณอยู่ที่ไหน? มีใครอยู่ด้วย?",
    type: "choice",
    options: [
      { text: "บ้านของตัวเอง รายล้อมด้วยคนรัก", tags: ["traditional"] },
      { text: "ท่ามกลางธรรมชาติ", tags: ["minimal"] },
      { text: "โรงพยาบาลกับครอบครัวใกล้ชิด", tags: ["modern"] },
      { text: "ที่ไหนก็ได้ ถ้าไม่รู้สึกเจ็บปวด", tags: ["minimal"] },
      { text: "อยู่คนเดียวอย่างสงบ", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 2,
    question: "คุณต้องการให้ผู้คนรู้สึกอย่างไรเมื่อคิดถึงคุณหลังจากคุณจากไป?",
    type: "choice",
    options: [
      { text: "คิดถึงและยิ้มออก", tags: ["modern"] },
      { text: "ภูมิใจในสิ่งที่ฉันเคยทำ", tags: ["traditional"] },
      { text: "เตือนใจถึงสิ่งสำคัญในชีวิต", tags: ["minimal"] },
      { text: "ไม่ต้องเศร้า แต่อย่าลืมกัน", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 3,
    question: "ในสถานการณ์เศร้า คุณมักปลอบใจผู้อื่นด้วยอะไร?",
    type: "choice",
    options: [
      { text: "คำพูดอบอุ่น", tags: ["traditional"] },
      { text: "การอยู่ข้าง ๆ โดยไม่พูดอะไร", tags: ["minimal"] },
      { text: "เรื่องตลกเบา ๆ", tags: ["modern"] },
      { text: "การสัมผัส เช่น การกอด", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 4,
    question: "คำพูดใดที่คุณหวังว่าใครสักคนจะกล่าวถึงคุณในงานศพ?",
    type: "choice",
    options: [
      { text: "เขา/เธอคือคนที่ทำให้ชีวิตเราดีขึ้น", tags: ["traditional"] },
      { text: "เขา/เธอไม่เคยหยุดเชื่อในความหวัง", tags: ["modern"] },
      { text: "คนแบบนี้ ไม่มีใครแทนที่ได้", tags: ["luxury"] },
      { text: "ชีวิตเขา/เธอเต็มไปด้วยความหมาย", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 5,
    question: "ความทรงจำแบบใดที่คุณอยากให้คนจดจำคุณมากที่สุด?",
    type: "choice",
    options: [
      { text: "ความใจดีและเข้าใจคนอื่น", tags: ["traditional"] },
      { text: "ความพยายามและไม่ยอมแพ้", tags: ["modern"] },
      { text: "ความสุขที่สร้างให้คนรอบข้าง", tags: ["modern"] },
      { text: "ความจริงใจและซื่อสัตย์", tags: ["traditional"] }
    ],
    section: "reflection"
  },
  {
    id: 6,
    question: "ในชีวิตที่ผ่านมา อะไรคือสิ่งที่คุณภาคภูมิใจที่สุด?",
    type: "choice",
    options: [
      { text: "ครอบครัวที่สร้างไว้", tags: ["traditional"] },
      { text: "การช่วยเหลือผู้อื่น", tags: ["modern"] },
      { text: "การเดินตามฝันของตัวเอง", tags: ["modern"] },
      { text: "การเติบโตและให้อภัย", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 7,
    question: "คุณเชื่อว่าการจากไปควรเป็นเรื่องส่วนตัวหรือเป็นการเฉลิมฉลองชีวิต?",
    type: "choice",
    options: [
      { text: "เรื่องส่วนตัวเงียบสงบ", tags: ["minimal"] },
      { text: "การเฉลิมฉลองเพื่อระลึกถึงชีวิต", tags: ["modern"] },
      { text: "ทั้งสองอย่างผสมกัน", tags: ["traditional"] },
      { text: "ขึ้นอยู่กับคนที่ยังอยู่", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 8,
    question: "หากเปรียบตัวคุณเป็นสถานที่หนึ่ง จะเป็นที่แบบไหน?",
    type: "choice",
    options: [
      { text: "ป่าเขาเงียบสงบ", tags: ["minimal"] },
      { text: "ร้านกาแฟอบอุ่น", tags: ["modern"] },
      { text: "ทะเลเปิดกว้าง", tags: ["luxury"] },
      { text: "บ้านที่เต็มไปด้วยเสียงหัวเราะ", tags: ["traditional"] }
    ],
    section: "reflection"
  },
  {
    id: 9,
    question: "ถ้าคุณสามารถสร้าง 'ความรู้สึก' ให้ผู้มาร่วมงานจดจำได้หนึ่งอย่าง มันคืออะไร?",
    type: "choice",
    options: [
      { text: "ความรัก", tags: ["traditional"] },
      { text: "ความหวัง", tags: ["modern"] },
      { text: "ความสงบ", tags: ["minimal"] },
      { text: "แรงบันดาลใจ", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 10,
    question: "คุณมองความตายว่าเป็นจุดจบหรือจุดเริ่มต้นใหม่?",
    type: "choice",
    options: [
      { text: "จุดจบของบทหนึ่ง", tags: ["traditional"] },
      { text: "จุดเริ่มต้นของอีกมิติหนึ่ง", tags: ["modern"] },
      { text: "ทั้งสองอย่าง", tags: ["modern"] },
      { text: "แค่การเปลี่ยนแปลงของธรรมชาติ", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 11,
    question: "คุณเคยไปงานศพที่รู้สึกประทับใจไหม? เพราะอะไร?",
    type: "choice",
    options: [
      { text: "ใช่ เพราะบรรยากาศอบอุ่น", tags: ["traditional"] },
      { text: "ใช่ เพราะสะท้อนตัวตนผู้จากไป", tags: ["modern"] },
      { text: "ไม่เคย มีแต่เศร้า", tags: ["minimal"] },
      { text: "ไม่แน่ใจ", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 12,
    question: "คุณอยากให้งานศพของคุณจัดขึ้นกลางวัน กลางคืน หรือช่วงเวลาใด?",
    type: "choice",
    options: [
      { text: "กลางวัน", tags: ["traditional"] },
      { text: "กลางคืน", tags: ["modern"] },
      { text: "เวลาเย็นแสงสวย", tags: ["luxury"] },
      { text: "แล้วแต่ความสะดวกของคนมา", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 13,
    question: "หากมีเสียงดนตรีเปิดระหว่างพิธี ควรเป็นแนวใด?",
    type: "choice",
    options: [
      { text: "บรรเลงเงียบสงบ", tags: ["minimal"] },
      { text: "เพลงที่ชอบส่วนตัว", tags: ["modern"] },
      { text: "ดนตรีแจ๊ส/คลาสสิก", tags: ["luxury"] },
      { text: "เพลงให้กำลังใจ", tags: ["traditional"] }
    ],
    section: "reflection"
  },
  {
    id: 14,
    question: "คุณอยากให้มีภาพถ่ายหรือวิดีโอแสดงความทรงจำของคุณไหม?",
    type: "choice",
    options: [
      { text: "อยากให้มี", tags: ["modern"] },
      { text: "ไม่จำเป็น", tags: ["minimal"] },
      { text: "แล้วแต่ครอบครัว", tags: ["traditional"] },
      { text: "ขอแค่ภาพเดียวก็พอ", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 15,
    question: "คุณเปิดรับการจัดงานศพในสถานที่ไม่ใช่วัด เช่น สวน รีสอร์ท โรงแรม หรือไม่?",
    type: "choice",
    options: [
      { text: "เปิดรับและชอบมาก", tags: ["modern"] },
      { text: "ได้ แต่ต้องเหมาะสม", tags: ["traditional"] },
      { text: "ขอเป็นวัดแบบดั้งเดิม", tags: ["traditional"] },
      { text: "ไม่แน่ใจ", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 16,
    question: "คุณรู้สึกอย่างไรกับพิธีกรรมทางศาสนา? อยากให้มีหรือไม่?",
    type: "choice",
    options: [
      { text: "อยากให้มีครบถ้วน", tags: ["traditional"] },
      { text: "เอาเท่าที่จำเป็น", tags: ["minimal"] },
      { text: "ไม่ต้องมีก็ได้", tags: ["modern"] },
      { text: "ขึ้นกับครอบครัวและศรัทธา", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 17,
    question: "ถ้ามีของที่ระลึกจากงานศพของคุณ คนควรได้รับอะไร?",
    type: "choice",
    options: [
      { text: "หนังสือธรรมะ/ข้อคิด", tags: ["traditional"] },
      { text: "ของใช้น่ารัก ๆ", tags: ["modern"] },
      { text: "สมุดภาพหรือรูปถ่าย", tags: ["luxury"] },
      { text: "ไม่ต้องมี", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 18,
    question: "คุณเคยพูดกับคนใกล้ตัวถึงเรื่องงานศพของตัวเองหรือไม่?",
    type: "choice",
    options: [
      { text: "เคยพูดอย่างจริงจัง", tags: ["modern"] },
      { text: "เคยพูดแบบเล่น ๆ", tags: ["modern"] },
      { text: "ยังไม่เคย", tags: ["traditional"] },
      { text: "คิดจะเริ่มพูดเร็ว ๆ นี้", tags: ["modern"] }
    ],
    section: "reflection"
  },
  {
    id: 19,
    question: "หากคุณเขียนจดหมายลาจากหนึ่งฉบับ คุณจะมอบให้ใคร?",
    type: "choice",
    options: [
      { text: "คนรัก", tags: ["modern"] },
      { text: "พ่อแม่", tags: ["traditional"] },
      { text: "เพื่อนสนิท", tags: ["modern"] },
      { text: "คนที่เคยทะเลาะกัน", tags: ["minimal"] }
    ],
    section: "reflection"
  },
  {
    id: 20,
    question: "อะไรคือสิ่งที่คุณยังไม่อยากให้ใครลืมเกี่ยวกับคุณ?",
    type: "choice",
    options: [
      { text: "รอยยิ้มและเสียงหัวเราะ", tags: ["modern"] },
      { text: "ความตั้งใจและความพยายาม", tags: ["traditional"] },
      { text: "ความรักที่มีให้คนรอบตัว", tags: ["modern"] },
      { text: "สิ่งดี ๆ ที่เคยทำไว้", tags: ["traditional"] }
    ],
    section: "reflection"
  },

  // Section 2: Practical & Budget
  {
    id: 21,
    question: "คุณอยากให้งานจัดกี่วัน?",
    type: "choice",
    options: [
      { text: "1 วัน (เช้า-เย็น)", cost: 50000, tags: ["minimal"] },
      { text: "3 วัน", cost: 150000, tags: ["traditional"] },
      { text: "5 วัน", cost: 250000, tags: ["modern"] },
      { text: "7 วัน", cost: 350000, tags: ["luxury"] }
    ],
    section: "practical"
  },
  {
    id: 22,
    question: "คุณต้องการจัดที่ไหน?",
    type: "choice",
    options: [
      { text: "ศาลาวัด", cost: 20000, tags: ["traditional"] },
      { text: "สวนส่วนตัว", cost: 50000, tags: ["modern"] },
      { text: "รีสอร์ทหรือโรงแรม", cost: 100000, tags: ["luxury"] },
      { text: "บ้านของตัวเอง", cost: 0, tags: ["minimal"] }
    ],
    section: "practical"
  },
  {
    id: 23,
    question: "อาหารในงานควรเป็นแบบใด?",
    type: "choice",
    options: [
      { text: "อาหารกล่องเรียบง่าย", cost: 200, tags: ["minimal"] },
      { text: "บุฟเฟต์ไทยทั่วไป", cost: 300, tags: ["traditional"] },
      { text: "มังสวิรัติ", cost: 400, tags: ["modern"] },
      { text: "คอร์สดินเนอร์", cost: 800, tags: ["luxury"] }
    ],
    section: "practical"
  },
  {
    id: 24,
    question: "คุณต้องการของที่ระลึกหรือไม่?",
    type: "choice",
    options: [
      { text: "ไม่จำเป็น", cost: 0, tags: ["minimal"] },
      { text: "ธูป เทียน หนังสือธรรมะ", cost: 100, tags: ["traditional"] },
      { text: "ของใช้เล็กๆ เช่น แก้วน้ำ ผ้าพันคอ", cost: 200, tags: ["modern"] },
      { text: "ของพรีเมียม เช่น สมุดภาพ ร่ม กระเป๋าผ้า", cost: 500, tags: ["luxury"] }
    ],
    section: "practical"
  },
  {
    id: 25,
    question: "จะมีดนตรีไหม?",
    type: "choice",
    options: [
      { text: "ไม่มี", cost: 0, tags: ["minimal"] },
      { text: "เปิดเพลงบรรเลงเบาๆ", cost: 5000, tags: ["traditional"] },
      { text: "ดนตรีสดแนวแจ๊สหรือคลาสสิก", cost: 15000, tags: ["modern"] },
      { text: "ดนตรีสดเต็มวง เช่น Acoustic Band", cost: 30000, tags: ["luxury"] }
    ],
    section: "practical"
  },
  {
    id: 26,
    question: "คาดว่าผู้ร่วมงานกี่คน?",
    type: "choice",
    options: [
      { text: "< 50 คน", cost: 0, tags: ["minimal"] },
      { text: "50-100 คน", cost: 0, tags: ["traditional"] },
      { text: "100-200 คน", cost: 0, tags: ["modern"] },
      { text: "> 200 คน", cost: 0, tags: ["luxury"] }
    ],
    section: "practical"
  }
]; 