import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import html2canvas from 'html2canvas';
import { questions } from '../data/questions';

const archetypeMeta = {
  peacefulSoul: {
    label: 'ผู้แสวงหาความสงบ',
    eng: 'The Peaceful Soul',
    hashtags: ['#สงบ', '#เรียบง่าย', '#ธรรมชาติ'],
    strengths: ['ใจเย็น', 'รักความสงบ', 'เข้าใจผู้อื่น'],
    color: 'from-[#e0eafc] to-[#cfdef3]',
    avatar: require('../avatars/peacefulSoul.png'),
    funeralStyle: 'งานศพที่เหมาะกับคุณคือพิธีเรียบง่าย อบอุ่น ท่ามกลางธรรมชาติหรือบ้านที่คุ้นเคย รายล้อมด้วยคนที่คุณรักและบรรยากาศสงบใจ'
  },
  lifeCelebrator: {
    label: 'ผู้เฉลิมฉลองชีวิต',
    eng: 'The Life Celebrator',
    hashtags: ['#สนุกสนาน', '#ร่าเริง', '#เฉลิมฉลอง'],
    strengths: ['ร่าเริง', 'สร้างแรงบันดาลใจ', 'เปิดใจ'],
    color: 'from-[#fceabb] to-[#f8b500]',
    avatar: require('../avatars/lifeCelebrator.png'),
    funeralStyle: 'งานศพที่เหมาะกับคุณคือพิธีที่เต็มไปด้วยเสียงหัวเราะ ดนตรี และเรื่องราวดี ๆ ให้ทุกคนได้ร่วมเฉลิมฉลองชีวิตของคุณ'
  },
  legacyGiver: {
    label: 'ผู้สร้างมรดก',
    eng: 'The Legacy Giver',
    hashtags: ['#แรงบันดาลใจ', '#มรดก', '#ความทรงจำ'],
    strengths: ['คิดลึกซึ้ง', 'สร้างสรรค์', 'มุ่งมั่น'],
    color: 'from-[#f5f7fa] to-[#c3cfe2]',
    avatar: require('../avatars/legacyGiver.png'),
    funeralStyle: 'งานศพที่เหมาะกับคุณคือพิธีที่เน้นการรำลึกถึงผลงานและแรงบันดาลใจที่คุณฝากไว้ มีการแบ่งปันเรื่องราวและของที่ระลึกที่มีความหมาย'
  },
  heartGuardian: {
    label: 'ผู้พิทักษ์หัวใจ',
    eng: 'The Heart Guardian',
    hashtags: ['#อบอุ่น', '#ครอบครัว', '#รัก'],
    strengths: ['ห่วงใย', 'อบอุ่น', 'เสียสละ'],
    color: 'from-[#fbc2eb] to-[#a6c1ee]',
    avatar: require('../avatars/heartGuardian.png'),
    funeralStyle: 'งานศพที่เหมาะกับคุณคือพิธีอบอุ่น รายล้อมด้วยครอบครัวและเพื่อนสนิท มีบรรยากาศแห่งความรักและการแบ่งปันความทรงจำดี ๆ'
  },
  quietPhilosopher: {
    label: 'นักคิดเงียบ',
    eng: 'The Quiet Philosopher',
    hashtags: ['#ลึกซึ้ง', '#ศรัทธา', '#เรียบง่าย'],
    strengths: ['ลึกซึ้ง', 'เข้าใจชีวิต', 'ถ่อมตน'],
    color: 'from-[#dbe6e4] to-[#b3c0c8]',
    avatar: require('../avatars/quietPhilosopher.png'),
    funeralStyle: 'งานศพที่เหมาะกับคุณคือพิธีเงียบสงบ เรียบง่าย มีการสะท้อนความหมายของชีวิตและศรัทธาในแบบที่คุณเชื่อ'
  }
};

const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

const Summary = ({ answers, onRestart }) => {
  // Calculate total cost
  const totalCost = Object.values(answers).reduce((sum, answer) => sum + (answer?.cost || 0), 0);

  // Personality archetype analysis
  const analyzePersonality = () => {
    const archetypeScores = {
      peacefulSoul: 0,
      lifeCelebrator: 0,
      legacyGiver: 0,
      heartGuardian: 0,
      quietPhilosopher: 0
    };

    // Keywords for each archetype
    const archetypeKeywords = {
      peacefulSoul: ['สงบ', 'ธรรมชาติ', 'เงียบ', 'เรียบง่าย', 'จุดจบ', 'พิธีเงียบ'],
      lifeCelebrator: ['สนุก', 'ร่าเริง', 'ปาร์ตี้', 'เฉลิมฉลอง', 'เพลงสนุก', 'กลางคืน'],
      legacyGiver: ['แรงบันดาลใจ', 'ความทรงจำ', 'จดจำ', 'มอบสิ่งของ', 'พัฒนาตัวเอง'],
      heartGuardian: ['ปลอบใจ', 'อบอุ่น', 'ครอบครัว', 'น้ำตา', 'คำพูดซึ้ง', 'รัก'],
      quietPhilosopher: ['เรียบง่าย', 'ศาสนา', 'ลึกซึ้ง', 'จุดเริ่มต้น', 'เขียนจดหมาย']
    };

    // Analyze each answer
    Object.entries(answers).forEach(([questionId, answer]) => {
      if (!answer?.text) return;

      const answerText = answer.text.toLowerCase();
      
      // Check which archetype keywords appear in the answer
      Object.entries(archetypeKeywords).forEach(([archetype, keywords]) => {
        keywords.forEach(keyword => {
          if (answerText.includes(keyword.toLowerCase())) {
            archetypeScores[archetype]++;
          }
        });
      });
    });

    // Find top archetypes
    const sortedArchetypes = Object.entries(archetypeScores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2);

    return {
      primaryType: sortedArchetypes[0][0],
      secondaryType: sortedArchetypes[1][0],
      scores: archetypeScores
    };
  };

  // Get funeral details with enhanced categorization
  const getFuneralDetails = () => {
    const reflectionAnswers = questions
      .filter(q => q.section === 'reflection')
      .map(q => ({ question: q.question, answer: answers[q.id]?.text || 'ไม่ระบุ' }));

    const practicalAnswers = questions
      .filter(q => q.section === 'practical')
      .map(q => ({ question: q.question, answer: answers[q.id]?.text || 'ไม่ระบุ', cost: answers[q.id]?.cost || 0 }));

    // Enhanced style analysis
    const styleCounts = {
      traditional: 0,
      modern: 0,
      minimal: 0,
      luxury: 0
    };

    Object.values(answers).forEach(answer => {
      if (answer?.tags) {
        answer.tags.forEach(tag => {
          if (styleCounts.hasOwnProperty(tag)) {
            styleCounts[tag]++;
          }
        });
      }
    });

    const dominantStyle = Object.entries(styleCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const styleName = {
      traditional: 'แบบดั้งเดิม',
      modern: 'แบบสมัยใหม่',
      minimal: 'แบบเรียบง่าย',
      luxury: 'แบบหรูหรา'
    }[dominantStyle];

    // Extract specific details for the summary card
    const venue = practicalAnswers.find(a => a.question.includes('จัดที่ไหน'))?.answer || 'ไม่ระบุ';
    const music = practicalAnswers.find(a => a.question.includes('ดนตรี'))?.answer || 'ไม่ระบุ';
    const souvenir = practicalAnswers.find(a => a.question.includes('ของที่ระลึก'))?.answer || 'ไม่ระบุ';
    const atmosphere = reflectionAnswers.find(a => a.question.includes('ความรู้สึก'))?.answer || 'ไม่ระบุ';

    return {
      style: styleName,
      venue,
      music,
      souvenir,
      atmosphere,
      reflection: reflectionAnswers,
      practical: practicalAnswers,
      totalCost
    };
  };

  const personality = analyzePersonality();
  const archetypeKey = personality.primaryType;
  const meta = archetypeMeta[archetypeKey];
  const details = getFuneralDetails();
  const breakEven = Math.ceil(details.totalCost / 1000);

  const cardRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [saveImageError, setSaveImageError] = useState(null);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'แผนงานศพของฉัน',
        text: `${meta.label} (${meta.eng})\n${meta.hashtags.join(' ')}\nงบประมาณ: ${details.totalCost.toLocaleString()} บาท\nคุ้มทุน: ${breakEven} คน (1,000 บาท/คน)`,
        url: window.location.href
      });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setShowCopyModal(true);
    }
  };

  const handleSavePDF = () => {
    window.print();
  };

  const handleSaveImage = async () => {
    setSaveImageError(null);
    if (!cardRef.current) return;
    await document.fonts.ready;
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#fff',
        scale: 2
      });
      const url = canvas.toDataURL('image/png');
      if (isMobile) {
        setImageUrl(url); // Show image for manual save
      } else {
        const link = document.createElement('a');
        link.download = 'funeral-summary.png';
        link.href = url;
        link.click();
      }
    } catch (err) {
      setSaveImageError('ไม่สามารถบันทึกรูปภาพได้บนอุปกรณ์นี้ กรุณาถ่ายภาพหน้าจอ (screenshot) แทน\nUnable to save image on this device. Please take a screenshot instead.');
    }
  };

  // Find number of people answer
  const peopleAnswer = details.practical.find(x => x.question.includes('กี่คน'))?.answer || '-';
  const musicAnswer = details.practical.find(x => x.question.includes('ดนตรี'))?.answer || '-';
  const souvenirAnswer = details.practical.find(x => x.question.includes('ของที่ระลึก'))?.answer || '-';

  // SVG cloud background
  const cloudBg = `url('data:image/svg+xml;utf8,<svg width=\"600\" height=\"750\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"300\" cy=\"700\" rx=\"280\" ry=\"80\" fill=\"%23e0eafc\" fill-opacity=\"0.5\"/><ellipse cx=\"150\" cy=\"720\" rx=\"100\" ry=\"30\" fill=\"%23cfdef3\" fill-opacity=\"0.4\"/><ellipse cx=\"450\" cy=\"730\" rx=\"120\" ry=\"40\" fill=\"%23cfdef3\" fill-opacity=\"0.3\"/></svg>')`;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=600, user-scalable=yes" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center p-2 md:p-4" style={{ background: 'linear-gradient(to bottom, #e0eafc, #cfdef3)' }}>
        <div
          ref={cardRef}
          className="relative mx-auto rounded-3xl shadow-lg bg-white/95 flex flex-col items-stretch overflow-hidden"
          style={{ width: '600px', height: '750px', backgroundImage: cloudBg, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          {/* Top: Info left, Avatar right (even bigger) */}
          <div className="flex flex-row w-full px-8 pt-10 gap-0 items-center" style={{ minHeight: '260px' }}>
            {/* Left: Thai and English archetype name, hashtags (bigger) */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <div className="text-xl font-semibold text-gray-700 mb-2 tracking-tight">{meta.label}</div>
              <div className="text-3xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">{meta.eng}</div>
              <div className="flex flex-row flex-wrap gap-3 mt-1">
                {meta.hashtags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-lg font-semibold break-words">{tag}</span>
                ))}
              </div>
            </div>
            {/* Right: Avatar (much bigger) */}
            <div className="flex-shrink-0 flex items-center justify-end" style={{width: '240px', height: '240px'}}>
              <img src={meta.avatar} alt={meta.eng} className="object-contain w-[220px] h-[220px]" style={{background: 'none', border: 'none'}} />
            </div>
          </div>
          {/* Description */}
          <div className="flex-none flex items-center justify-center w-full px-8" style={{minHeight: '90px', marginTop: '10px'}}>
            <div className="w-full h-full bg-blue-50 rounded-2xl shadow flex items-center justify-center px-6 py-3 max-w-[98%] mx-auto overflow-y-auto max-h-32">
              <div className="text-lg font-medium text-blue-900 text-center italic leading-snug max-w-[98%] break-words">"{meta.funeralStyle}"</div>
            </div>
          </div>
          {/* Info Row: Place, Music, Souvenir */}
          <div className="flex flex-row gap-4 w-full px-8" style={{minHeight: '90px', marginTop: '14px'}}>
            <div className="flex-1 bg-white/95 rounded-xl shadow flex flex-col items-center justify-center p-2 h-full min-w-0 overflow-y-auto max-h-24">
              <div className="text-2xl mb-1">📍</div>
              <div className="text-xs text-gray-700 font-bold">สถานที่</div>
              <div className="font-normal text-gray-900 text-base text-center break-words leading-tight">{details.venue}</div>
            </div>
            <div className="flex-1 bg-white/95 rounded-xl shadow flex flex-col items-center justify-center p-2 h-full min-w-0 overflow-y-auto max-h-24">
              <div className="text-2xl mb-1">🎵</div>
              <div className="text-xs text-gray-700 font-bold">ดนตรี</div>
              <div className="font-normal text-gray-900 text-base text-center break-words leading-tight">{musicAnswer}</div>
            </div>
            <div className="flex-1 bg-white/95 rounded-xl shadow flex flex-col items-center justify-center p-2 h-full min-w-0 overflow-y-auto max-h-24">
              <div className="text-2xl mb-1">🎁</div>
              <div className="text-xs text-gray-700 font-bold">ของที่ระลึก</div>
              <div className="font-normal text-gray-900 text-base text-center break-words leading-tight">{souvenirAnswer}</div>
            </div>
          </div>
          {/* Budget Needed (Break Even) */}
          <div className="flex-none flex items-center justify-center w-full px-8" style={{minHeight: '70px', marginTop: '18px'}}>
            <div className="w-full h-full bg-green-100 rounded-2xl shadow flex flex-col items-center justify-center px-6 py-3 overflow-y-auto max-h-28">
              <div className="text-xl font-bold text-green-900 mb-1">งบประมาณที่ต้องใช้ / Budget Needed</div>
              <div className="text-lg text-green-900 font-semibold">{details.totalCost.toLocaleString()} บาท</div>
              <div className="text-xs text-gray-600 mt-1">(คุ้มทุน {breakEven} คน x 1,000 บาท)</div>
            </div>
          </div>
          {/* Action Buttons Row */}
          <div className="flex flex-row gap-3 justify-center items-center w-full px-8 mt-4">
            <button onClick={handleShare} className="flex-1 py-2 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600 transition text-sm">📤 แชร์ / Share</button>
            {!isMobile && (
              <button onClick={handleSavePDF} className="flex-1 py-2 bg-gray-200 rounded-xl text-gray-900 font-semibold hover:bg-gray-300 transition text-sm">🖨️ PDF / Print</button>
            )}
            <button onClick={handleSaveImage} className="flex-1 py-2 bg-pink-500 rounded-xl text-white font-semibold hover:bg-pink-600 transition text-sm">💾 Save Image</button>
            <button onClick={onRestart} className="flex-1 py-2 bg-gray-100 rounded-xl text-gray-900 font-semibold hover:bg-gray-200 transition text-sm">🔄 Restart</button>
          </div>
          {copied && (
            <div className="text-center text-green-600 mt-2">คัดลอกลิงก์แล้ว! Link copied!</div>
          )}
          {showCopyModal && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 max-w-xs text-center">
                <p className="mb-2 text-gray-800">คัดลอกลิงก์นี้ด้วยตนเอง / Copy this link:</p>
                <input
                  className="w-full border rounded p-2 mb-2"
                  value={window.location.href}
                  readOnly
                  onFocus={e => e.target.select()}
                />
                <p className="text-xs text-gray-500">แตะค้างที่ลิงก์แล้วเลือก Copy / Tap and hold to copy</p>
                <button onClick={() => setShowCopyModal(false)} className="mt-2 text-blue-500 underline">ปิด / Close</button>
              </div>
            </div>
          )}
          {imageUrl && isMobile && (
            <div className="mt-4 px-4 text-center">
              <p className="mb-2 text-sm text-gray-700">แตะค้างที่รูปเพื่อบันทึก / Tap and hold to save:</p>
              <img src={imageUrl} alt="Summary" className="w-full rounded-xl shadow" style={{maxWidth: 520, margin: '0 auto'}} />
              <button onClick={() => setImageUrl(null)} className="mt-2 text-blue-500 underline">ปิด / Close</button>
            </div>
          )}
          {saveImageError && (
            <div className="mt-4 px-4 text-center text-red-600 whitespace-pre-line">{saveImageError}</div>
          )}
          {/* Spacer to push footer down */}
          <div className="flex-grow" />
          {/* Footer: Call to action, bilingual */}
          <div className="flex-none w-full text-center text-xs text-gray-400 pb-4 pt-2">
            เล่นได้ที่ <span className="underline">www.tryyourfuneral.com</span> | Play this at <span className="underline">www.tryyourfuneral.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary; 