(() => {
  const uiCopy = {
    en: {
      backToPortfolio: '← Back to AI Healthcare',
      discussProduct: 'Discuss this product',
      exploreCapabilities: 'Explore capabilities',
      visualNotice: 'Image for reference only.',
      capabilityEyebrow: 'Clinical focus',
      workflowEyebrow: 'Product workflow',
      highlightEyebrow: 'Application value',
      ctaEyebrow: 'Explore the fit',
      ctaHeading: 'Discuss the workflow, setting and outcome you need',
      ctaText: 'We can help clarify product fit, deployment considerations and the appropriate next step for your market.',
      imageAlt: 'Reference image for {product}'
    },
    'zh-cn': {
      backToPortfolio: '← 返回AI医疗产品',
      discussProduct: '咨询此产品',
      exploreCapabilities: '查看核心能力',
      visualNotice: '图像仅供参考。',
      capabilityEyebrow: '临床重点',
      workflowEyebrow: '产品流程',
      highlightEyebrow: '应用价值',
      ctaEyebrow: '评估适配性',
      ctaHeading: '沟通您需要的流程、环境与成果',
      ctaText: '我们可以协助明确产品适配、部署考虑事项及所在市场合适的下一步。',
      imageAlt: '{product}参考图像'
    },
    'zh-tw': {
      backToPortfolio: '← 返回AI醫療產品',
      discussProduct: '諮詢此產品',
      exploreCapabilities: '查看核心能力',
      visualNotice: '圖像僅供參考。',
      capabilityEyebrow: '臨床重點',
      workflowEyebrow: '產品流程',
      highlightEyebrow: '應用價值',
      ctaEyebrow: '評估適配性',
      ctaHeading: '溝通您需要的流程、環境與成果',
      ctaText: '我們可以協助明確產品適配、部署考量及所在市場合適的下一步。',
      imageAlt: '{product}參考圖像'
    },
    ms: {
      backToPortfolio: '← Kembali ke AI Kesihatan',
      discussProduct: 'Bincangkan produk ini',
      exploreCapabilities: 'Teroka keupayaan',
      visualNotice: 'Imej untuk rujukan sahaja.',
      capabilityEyebrow: 'Fokus klinikal',
      workflowEyebrow: 'Aliran produk',
      highlightEyebrow: 'Nilai aplikasi',
      ctaEyebrow: 'Nilai kesesuaian',
      ctaHeading: 'Bincangkan aliran kerja, persekitaran dan hasil yang anda perlukan',
      ctaText: 'Kami boleh membantu menjelaskan kesesuaian produk, pertimbangan pelaksanaan dan langkah seterusnya untuk pasaran anda.',
      imageAlt: 'Imej rujukan untuk {product}'
    },
    th: {
      backToPortfolio: '← กลับไปที่ AI ด้านสุขภาพ',
      discussProduct: 'ปรึกษาเกี่ยวกับผลิตภัณฑ์นี้',
      exploreCapabilities: 'สำรวจความสามารถ',
      visualNotice: 'ภาพใช้เพื่อการอ้างอิงเท่านั้น',
      capabilityEyebrow: 'จุดเน้นทางคลินิก',
      workflowEyebrow: 'ขั้นตอนการทำงานของผลิตภัณฑ์',
      highlightEyebrow: 'คุณค่าการใช้งาน',
      ctaEyebrow: 'ประเมินความเหมาะสม',
      ctaHeading: 'พูดคุยเกี่ยวกับขั้นตอนงาน สภาพแวดล้อม และผลลัพธ์ที่คุณต้องการ',
      ctaText: 'เราช่วยชี้แจงความเหมาะสมของผลิตภัณฑ์ ข้อพิจารณาในการติดตั้ง และขั้นตอนถัดไปสำหรับตลาดของคุณได้',
      imageAlt: 'ภาพอ้างอิงสำหรับ {product}'
    }
  };

  const productCatalog = {
    'breast-ai': {
      titleKey: 'breastAiTitle',
      categoryKey: 'specialtyEyebrow',
      summaryKey: 'breastAiDesc',
      images: ['assets/products/visual-mammography.webp'],
      focusImage: 'assets/products/focus-breast-ai.jpg',
      tags: [{key:'breastXray'},{key:'nmpaApproved'},{text:'BI-RADS'}],
      accent: '#ff9fc3',
      glow: '#e9578f35',
      details: {
        en: {
          facts: [
            ['4','Core lesion groups: masses, calcifications, architectural distortion and asymmetry'],
            ['BI-RADS','Guideline-based assessment and structured reporting'],
            ['PACS','Results can be reviewed within the imaging workflow']
          ],
          capHeading: 'A full mammography reading pathway, not a single finding detector',
          capIntro: 'The supplied manual describes a system that connects lesion detection, breast composition, risk assessment and reporting in one workflow.',
          caps: [
            ['Multi-lesion detection','Localises and segments masses, calcifications, architectural distortion and asymmetric density, with correspondence across standard mammography views.'],
            ['Density and associated signs','Classifies breast composition using the ACR framework and identifies signs including benign calcification, nipple retraction, skin thickening and enlarged axillary nodes.'],
            ['BI-RADS assessment','Combines lesion morphology, margin, density, distribution and associated signs to support a standardised BI-RADS recommendation.'],
            ['Quality control and reporting','Provides image-quality review, conspicuous alerts, case prioritisation and a structured illustrated report that can be viewed through PACS.']
          ],
          flowHeading: 'From mammogram acquisition to a review-ready report',
          flowIntro: 'The workflow is designed around the way radiologists compare views, characterise findings and document an assessment.',
          steps: [
            ['Acquire and normalise','Mammograms from supported systems enter a normalisation process intended to reduce variation between device types.'],
            ['Detect and correlate','AI analyses multiple views, locates suspicious findings and correlates the same lesion across projections.'],
            ['Review and report','The radiologist reviews breast composition, lesion characteristics, BI-RADS suggestion and the generated structured report.']
          ],
          highlightHeading: 'Built for screening volume and diagnostic consistency',
          highlightIntro: 'The product manual emphasises dense-breast analysis, standard terminology and a workflow that helps imaging teams manage growing demand.',
          highlights: [
            ['Support for dense breasts','Multi-view reasoning and feature analysis are intended to improve visibility of findings that may be obscured by dense tissue.'],
            ['Consistent documentation','Structured content follows a familiar diagnostic framework, helping standardise terminology and report completeness.'],
            ['Flexible clinical review','PACS viewing, priority handling and magnification tools support both routine screening and focused diagnostic review.']
          ]
        },
        'zh-cn': {
          facts: [
            ['4类','覆盖肿块、钙化、结构扭曲与不对称影'],
            ['BI-RADS','依据规范进行综合评估并生成结构化报告'],
            ['PACS','结果可在影像工作流程中直接调阅']
          ],
          capHeading: '覆盖完整乳腺X线阅片链路，而不只是单一病灶检测',
          capIntro: '产品手册展示了从病灶检出、腺体构成、风险评估到报告生成的一体化乳腺X线辅助诊断流程。',
          caps: [
            ['多病灶检出与定位','对肿块、钙化、结构扭曲和不对称影进行检出与分割，并在标准投照位之间关联同一病灶。'],
            ['腺体分型与伴随征象','按照ACR框架评估乳腺腺体构成，并识别良性钙化、乳头凹陷、皮肤增厚及腋下淋巴结肿大等征象。'],
            ['BI-RADS综合评估','结合病灶形态、边缘、密度、分布和伴随征象，辅助形成标准化BI-RADS建议。'],
            ['质控、预警与报告','支持影像质控、危急病灶提示、病例优先处理，并生成可通过PACS调阅的结构化图文报告。']
          ],
          flowHeading: '从乳腺X线采集到可审核的结构化报告',
          flowIntro: '流程贴合放射科医师比较不同投照位、描述征象并形成诊断意见的实际工作方式。',
          steps: [
            ['采集与归一化','接收支持机型的乳腺X线影像，并进行归一化处理，降低不同设备成像差异。'],
            ['检出与多视角关联','AI分析不同投照位，定位可疑病灶并关联同一病灶在各视图中的表现。'],
            ['审核与报告','医师审核腺体构成、病灶特征、BI-RADS建议及系统生成的结构化报告。']
          ],
          highlightHeading: '面向筛查规模与诊断一致性设计',
          highlightIntro: '手册重点强调致密型乳腺分析、标准术语以及应对乳腺X线阅片需求增长的工作流程。',
          highlights: [
            ['致密型乳腺支持','利用多视角分析与征象描述，帮助呈现可能被致密腺体遮挡的可疑区域。'],
            ['报告规范化','结构化内容遵循熟悉的诊断框架，帮助统一术语并提升报告完整度。'],
            ['灵活阅片体验','PACS调阅、优先处理和放大查看功能同时支持常规筛查与重点病例复核。']
          ]
        },
        'zh-tw': {
          facts: [
            ['4類','涵蓋腫塊、鈣化、結構扭曲與不對稱影'],
            ['BI-RADS','依據規範進行綜合評估並產生結構化報告'],
            ['PACS','結果可在影像工作流程中直接調閱']
          ],
          capHeading: '涵蓋完整乳腺X線閱片鏈路，而不只是單一病灶偵測',
          capIntro: '產品手冊展示了從病灶偵測、腺體構成、風險評估到報告產生的一體化乳腺X線輔助診斷流程。',
          caps: [
            ['多病灶偵測與定位','對腫塊、鈣化、結構扭曲和不對稱影進行偵測與分割，並在標準投照位之間關聯同一病灶。'],
            ['腺體分型與伴隨徵象','按照ACR架構評估乳腺腺體構成，並識別良性鈣化、乳頭凹陷、皮膚增厚及腋下淋巴結腫大等徵象。'],
            ['BI-RADS綜合評估','結合病灶形態、邊緣、密度、分布和伴隨徵象，協助形成標準化BI-RADS建議。'],
            ['質控、預警與報告','支援影像質控、危急病灶提示、病例優先處理，並產生可透過PACS調閱的結構化圖文報告。']
          ],
          flowHeading: '從乳腺X線採集到可審核的結構化報告',
          flowIntro: '流程貼合放射科醫師比較不同投照位、描述徵象並形成診斷意見的實際工作方式。',
          steps: [
            ['採集與正規化','接收支援機型的乳腺X線影像，並進行正規化處理，降低不同設備成像差異。'],
            ['偵測與多視角關聯','AI分析不同投照位，定位可疑病灶並關聯同一病灶在各視圖中的表現。'],
            ['審核與報告','醫師審核腺體構成、病灶特徵、BI-RADS建議及系統產生的結構化報告。']
          ],
          highlightHeading: '面向篩檢規模與診斷一致性設計',
          highlightIntro: '手冊重點強調緻密型乳腺分析、標準術語以及因應乳腺X線閱片需求成長的工作流程。',
          highlights: [
            ['緻密型乳腺支援','利用多視角分析與徵象描述，協助呈現可能被緻密腺體遮擋的可疑區域。'],
            ['報告規範化','結構化內容遵循熟悉的診斷架構，協助統一術語並提升報告完整度。'],
            ['靈活閱片體驗','PACS調閱、優先處理和放大查看功能同時支援常規篩檢與重點病例複核。']
          ]
        },
        ms: {
          facts: [
            ['4 kumpulan','Jisim, kalsifikasi, herotan seni bina dan asimetri'],
            ['BI-RADS','Penilaian berasaskan garis panduan dan laporan berstruktur'],
            ['PACS','Hasil boleh disemak dalam aliran kerja pengimejan']
          ],
          capHeading: 'Aliran pembacaan mamografi penuh, bukan sekadar pengesan satu penemuan',
          capIntro: 'Manual produk menerangkan aliran bersepadu daripada pengesanan lesi dan komposisi payudara kepada penilaian risiko serta laporan.',
          caps: [
            ['Pengesanan pelbagai lesi','Menyetempat dan membahagi jisim, kalsifikasi, herotan seni bina serta ketumpatan tidak simetri, dengan padanan antara pandangan mamografi standard.'],
            ['Ketumpatan dan tanda berkaitan','Mengelaskan komposisi payudara mengikut rangka ACR serta mengenal pasti kalsifikasi jinak, retraksi puting, penebalan kulit dan nodus aksila membesar.'],
            ['Penilaian BI-RADS','Menggabungkan bentuk, sempadan, ketumpatan, taburan dan tanda berkaitan untuk menyokong cadangan BI-RADS yang seragam.'],
            ['Kawalan mutu dan laporan','Menyokong semakan kualiti imej, amaran lesi, keutamaan kes dan laporan bergambar berstruktur yang boleh dilihat melalui PACS.']
          ],
          flowHeading: 'Daripada pemerolehan mamogram kepada laporan sedia disemak',
          flowIntro: 'Aliran ini mengikuti cara pakar radiologi membandingkan pandangan, mencirikan penemuan dan merekodkan penilaian.',
          steps: [
            ['Peroleh dan normalkan','Mamogram daripada sistem yang disokong dinormalkan untuk mengurangkan variasi antara jenis peranti.'],
            ['Kesan dan padankan','AI menganalisis pelbagai pandangan, mencari penemuan mencurigakan dan memadankan lesi yang sama merentas unjuran.'],
            ['Semak dan lapor','Pakar radiologi menyemak komposisi payudara, ciri lesi, cadangan BI-RADS dan laporan berstruktur.']
          ],
          highlightHeading: 'Direka untuk jumlah saringan dan konsistensi diagnosis',
          highlightIntro: 'Manual menekankan analisis payudara padat, istilah standard dan aliran kerja untuk membantu pasukan pengimejan mengurus permintaan.',
          highlights: [
            ['Sokongan payudara padat','Penaakulan pelbagai pandangan membantu menyerlahkan penemuan yang mungkin terlindung oleh tisu padat.'],
            ['Dokumentasi konsisten','Kandungan berstruktur membantu menyeragamkan istilah dan kelengkapan laporan.'],
            ['Semakan klinikal fleksibel','Paparan PACS, keutamaan kes dan alat pembesaran menyokong saringan rutin serta semakan tertumpu.']
          ]
        },
        th: {
          facts: [
            ['4 กลุ่ม','ก้อน หินปูน ความบิดเบี้ยวของโครงสร้าง และความไม่สมมาตร'],
            ['BI-RADS','การประเมินตามแนวทางและรายงานแบบมีโครงสร้าง'],
            ['PACS','ตรวจทานผลภายในขั้นตอนงานภาพทางการแพทย์ได้']
          ],
          capHeading: 'ครอบคลุมกระบวนการอ่านแมมโมแกรม ไม่ได้ตรวจเพียงความผิดปกติชนิดเดียว',
          capIntro: 'คู่มืออธิบายกระบวนการแบบบูรณาการตั้งแต่ตรวจหารอยโรคและองค์ประกอบเต้านม ไปจนถึงประเมินความเสี่ยงและออกรายงาน',
          caps: [
            ['ตรวจหารอยโรคหลายชนิด','ระบุตำแหน่งและแบ่งส่วนก้อน หินปูน ความบิดเบี้ยวของโครงสร้าง และความหนาแน่นไม่สมมาตร พร้อมเชื่อมโยงรอยโรคระหว่างมุมถ่ายมาตรฐาน'],
            ['ความหนาแน่นและสัญญาณร่วม','จัดประเภทองค์ประกอบเต้านมตามกรอบ ACR และระบุสัญญาณ เช่น หินปูนชนิดไม่ร้ายแรง หัวนมบุ๋ม ผิวหนังหนา และต่อมน้ำเหลืองรักแร้โต'],
            ['การประเมิน BI-RADS','รวมรูปร่าง ขอบเขต ความหนาแน่น การกระจาย และสัญญาณร่วม เพื่อสนับสนุนข้อเสนอแนะ BI-RADS ที่เป็นมาตรฐาน'],
            ['ควบคุมคุณภาพและรายงาน','รองรับการตรวจคุณภาพภาพ การแจ้งเตือนรอยโรค การจัดลำดับเคส และรายงานภาพแบบมีโครงสร้างผ่าน PACS']
          ],
          flowHeading: 'จากการรับภาพแมมโมแกรมสู่รายงานที่พร้อมตรวจทาน',
          flowIntro: 'ขั้นตอนสอดคล้องกับการเปรียบเทียบมุมถ่าย อธิบายลักษณะ และบันทึกการประเมินของรังสีแพทย์',
          steps: [
            ['รับและปรับมาตรฐานภาพ','ปรับภาพจากระบบที่รองรับเพื่อลดความแตกต่างระหว่างอุปกรณ์'],
            ['ตรวจและเชื่อมโยง','AI วิเคราะห์หลายมุม ระบุตำแหน่งที่น่าสงสัย และเชื่อมโยงรอยโรคเดียวกันข้ามมุมถ่าย'],
            ['ตรวจทานและรายงาน','รังสีแพทย์ตรวจองค์ประกอบเต้านม ลักษณะรอยโรค คำแนะนำ BI-RADS และรายงานที่ระบบสร้าง']
          ],
          highlightHeading: 'ออกแบบเพื่อรองรับปริมาณการคัดกรองและความสม่ำเสมอ',
          highlightIntro: 'คู่มือเน้นการวิเคราะห์เต้านมหนาแน่น คำศัพท์มาตรฐาน และขั้นตอนที่ช่วยจัดการความต้องการอ่านภาพที่เพิ่มขึ้น',
          highlights: [
            ['รองรับเต้านมหนาแน่น','การวิเคราะห์หลายมุมช่วยแสดงบริเวณน่าสงสัยที่อาจถูกเนื้อเยื่อหนาแน่นบดบัง'],
            ['เอกสารสม่ำเสมอ','เนื้อหาแบบมีโครงสร้างช่วยให้คำศัพท์และความครบถ้วนของรายงานเป็นมาตรฐาน'],
            ['ตรวจทานยืดหยุ่น','PACS การจัดลำดับเคส และเครื่องมือขยายภาพ รองรับทั้งการคัดกรองและการตรวจเคสเฉพาะ']
          ]
        }
      }
    },

    'cardiovascular-ai': {
      titleKey: 'cardiovascularAiTitle',
      categoryKey: 'specialtyEyebrow',
      summaryKey: 'cardiovascularAiDesc',
      images: ['assets/products/visual-cardiovascular-analysis.webp'],
      focusImage: 'assets/products/focus-cardiovascular-ai.jpg',
      tags: [{key:'coronaryCTA'},{text:'CT-FFR'},{key:'calciumScoring'}],
      accent: '#ff9d7d',
      glow: '#ef6a4538',
      details: {
        en: {
          facts: [
            ['≤3 min','Brochure-stated time for automated reconstruction and selected analyses'],
            ['1.5 mm','Small coronary branches described as segmentable'],
            ['3-in-1','Morphology, functional assessment and structured output']
          ],
          capHeading: 'Coronary CTA from automatic reconstruction to functional assessment',
          capIntro: 'The manual presents a zero-click pathway that turns CT images into coronary anatomy, plaque and stenosis analysis, functional indicators, films and reports.',
          caps: [
            ['Automated CTA reconstruction','Builds cardiac 3D views, coronary trees and 2D CPR, MPR and MIP series, with vessel naming and support for stents, grafts and myocardial bridges.'],
            ['Plaque and stenosis analysis','Segments the lumen, identifies calcified, non-calcified and mixed plaque, and quantifies the degree of coronary narrowing.'],
            ['Calcium and cardiac function','Calculates calcium score automatically and supports assessment of cardiac contraction and output from the same CT workflow.'],
            ['Functional risk indicators','Extends analysis with CT-FFR, perivascular adipose tissue and TAG to support review of ischaemia and plaque-related risk.']
          ],
          flowHeading: 'One CTA study, a broader cardiovascular assessment',
          flowIntro: 'Automated post-processing is intended to reduce manual workstation steps while keeping the clinician in control of interpretation.',
          steps: [
            ['Receive coronary CTA','CT images are routed to the AI server without requiring manual case-by-case post-processing.'],
            ['Reconstruct and quantify','The system extracts coronary anatomy, evaluates plaque and stenosis, and calculates selected morphological and functional indicators.'],
            ['Review films and reports','Clinicians review interactive views, configured film layouts and structured reports before finalising the study.']
          ],
          highlightHeading: 'More information from the same coronary CTA workflow',
          highlightIntro: 'The product combines anatomy, function and documentation so teams can move from raw images to a complete review package.',
          highlights: [
            ['Less manual post-processing','Automated vessel extraction, naming and layout reduce repetitive workstation operations.'],
            ['Morphology plus function','Stenosis, plaque, calcium and functional indicators can be reviewed together rather than as isolated outputs.'],
            ['Standardised delivery','Configurable films and text or table-based reports help create consistent departmental output.']
          ]
        },
        'zh-cn': {
          facts: [
            ['≤3分钟','手册列示的自动重建及部分分析用时'],
            ['1.5 mm','可分割的细小冠脉分支尺度'],
            ['三合一','形态学、功能学与结构化输出']
          ],
          capHeading: '从冠脉CTA自动重建延伸到功能学评估',
          capIntro: '手册展示了一条零键后处理链路，将CT影像转化为冠脉解剖、斑块与狭窄分析、功能指标、胶片和报告。',
          caps: [
            ['冠脉CTA自动重建','生成心脏三维图、冠脉树及CPR、MPR、MIP等二维序列，自动命名血管，并支持支架、搭桥血管和心肌桥显示。'],
            ['斑块与狭窄分析','分割管腔，识别钙化、非钙化及混合斑块，并量化评估冠状动脉狭窄程度。'],
            ['钙化积分与心功能','自动计算冠脉钙化积分，并在同一CT流程中辅助分析心脏收缩和泵血功能。'],
            ['功能学风险指标','通过CT-FFR、冠周脂肪和TAG等分析，辅助评估心肌缺血及斑块相关风险。']
          ],
          flowHeading: '一次冠脉CTA，形成更全面的心血管评估',
          flowIntro: '自动后处理旨在减少传统工作站的手工步骤，同时保留医师对结果的审核与解释。',
          steps: [
            ['接收冠脉CTA','CT影像自动路由至AI服务器，无需逐例启动复杂的手工后处理。'],
            ['重建与量化','系统提取冠脉解剖，分析斑块与狭窄，并计算选定的形态学和功能学指标。'],
            ['审核胶片与报告','医师审核交互式视图、配置好的胶片版式和结构化报告后完成诊断。']
          ],
          highlightHeading: '从同一冠脉CTA流程中获得更多信息',
          highlightIntro: '产品将解剖、功能与文档输出整合在一起，让团队从原始影像更快进入完整审核。',
          highlights: [
            ['减少手工后处理','血管提取、命名与排版自动完成，减少重复的工作站操作。'],
            ['形态与功能结合','狭窄、斑块、钙化和功能指标可在同一工作流程中综合查看。'],
            ['规范化输出','可配置胶片及文本式、表格式报告，帮助统一科室输出标准。']
          ]
        },
        'zh-tw': {
          facts: [
            ['≤3分鐘','手冊列示的自動重建及部分分析用時'],
            ['1.5 mm','可分割的細小冠脈分支尺度'],
            ['三合一','形態學、功能學與結構化輸出']
          ],
          capHeading: '從冠脈CTA自動重建延伸到功能學評估',
          capIntro: '手冊展示了一條零鍵後處理鏈路，將CT影像轉化為冠脈解剖、斑塊與狹窄分析、功能指標、膠片和報告。',
          caps: [
            ['冠脈CTA自動重建','產生心臟三維圖、冠脈樹及CPR、MPR、MIP等二維序列，自動命名血管，並支援支架、繞道血管和心肌橋顯示。'],
            ['斑塊與狹窄分析','分割管腔，識別鈣化、非鈣化及混合斑塊，並量化評估冠狀動脈狹窄程度。'],
            ['鈣化積分與心功能','自動計算冠脈鈣化積分，並在同一CT流程中協助分析心臟收縮和泵血功能。'],
            ['功能學風險指標','透過CT-FFR、冠周脂肪和TAG等分析，協助評估心肌缺血及斑塊相關風險。']
          ],
          flowHeading: '一次冠脈CTA，形成更全面的心血管評估',
          flowIntro: '自動後處理旨在減少傳統工作站的手動步驟，同時保留醫師對結果的審核與解釋。',
          steps: [
            ['接收冠脈CTA','CT影像自動路由至AI伺服器，無需逐例啟動複雜的手動後處理。'],
            ['重建與量化','系統提取冠脈解剖，分析斑塊與狹窄，並計算選定的形態學和功能學指標。'],
            ['審核膠片與報告','醫師審核互動式視圖、設定好的膠片版式和結構化報告後完成診斷。']
          ],
          highlightHeading: '從同一冠脈CTA流程中獲得更多資訊',
          highlightIntro: '產品將解剖、功能與文件輸出整合在一起，讓團隊從原始影像更快進入完整審核。',
          highlights: [
            ['減少手動後處理','血管提取、命名與排版自動完成，減少重複的工作站操作。'],
            ['形態與功能結合','狹窄、斑塊、鈣化和功能指標可在同一工作流程中綜合查看。'],
            ['規範化輸出','可設定膠片及文字式、表格式報告，協助統一科室輸出標準。']
          ]
        },
        ms: {
          facts: [
            ['≤3 min','Masa automasi terpilih yang dinyatakan dalam manual'],
            ['1.5 mm','Cabang koronari kecil yang diterangkan boleh disegmentasi'],
            ['3-dalam-1','Morfologi, fungsi dan output berstruktur']
          ],
          capHeading: 'Daripada pembinaan semula CTA koronari kepada penilaian fungsi',
          capIntro: 'Manual menerangkan laluan tanpa klik yang menukar imej CT kepada anatomi koronari, analisis plak dan stenosis, petunjuk fungsi, filem dan laporan.',
          caps: [
            ['Pembinaan semula CTA automatik','Membina pandangan 3D jantung, pokok koronari serta siri CPR, MPR dan MIP dengan penamaan salur dan sokongan untuk stent, graft dan myocardial bridge.'],
            ['Analisis plak dan stenosis','Membahagi lumen, mengenal pasti plak berkalsium, tidak berkalsium dan campuran, serta mengukur tahap penyempitan.'],
            ['Skor kalsium dan fungsi jantung','Mengira skor kalsium secara automatik dan menyokong penilaian pengecutan serta output jantung.'],
            ['Petunjuk risiko fungsi','Melanjutkan analisis dengan CT-FFR, tisu adipos perivaskular dan TAG untuk semakan iskemia dan risiko plak.']
          ],
          flowHeading: 'Satu kajian CTA, penilaian kardiovaskular yang lebih luas',
          flowIntro: 'Pascapemprosesan automatik mengurangkan langkah manual sambil mengekalkan semakan dan tafsiran klinikal.',
          steps: [
            ['Terima CTA koronari','Imej CT dihantar ke pelayan AI tanpa pemprosesan manual bagi setiap kes.'],
            ['Bina semula dan ukur','Sistem mengekstrak anatomi koronari, menilai plak dan stenosis serta mengira petunjuk terpilih.'],
            ['Semak filem dan laporan','Klinisi menyemak paparan interaktif, susun atur filem dan laporan berstruktur.']
          ],
          highlightHeading: 'Lebih banyak maklumat daripada aliran CTA yang sama',
          highlightIntro: 'Anatomi, fungsi dan dokumentasi digabungkan supaya pasukan dapat bergerak daripada imej mentah kepada pakej semakan lengkap.',
          highlights: [
            ['Kurang pascapemprosesan manual','Pengekstrakan, penamaan dan susun atur salur mengurangkan operasi stesen kerja berulang.'],
            ['Morfologi bersama fungsi','Stenosis, plak, kalsium dan petunjuk fungsi boleh disemak dalam satu aliran.'],
            ['Penghantaran standard','Filem serta laporan teks atau jadual boleh dikonfigurasi mengikut keperluan jabatan.']
          ]
        },
        th: {
          facts: [
            ['≤3 นาที','เวลาที่คู่มือระบุสำหรับการสร้างภาพและการวิเคราะห์บางส่วน'],
            ['1.5 มม.','ขนาดกิ่งหลอดเลือดหัวใจเล็กที่ระบบอธิบายว่าสามารถแบ่งส่วนได้'],
            ['3 ใน 1','สัณฐานวิทยา การทำงาน และผลลัพธ์แบบมีโครงสร้าง']
          ],
          capHeading: 'จากการสร้างภาพ Coronary CTA อัตโนมัติสู่การประเมินการทำงาน',
          capIntro: 'คู่มือแสดงขั้นตอนแบบไม่ต้องคลิกซึ่งเปลี่ยนภาพ CT เป็นกายวิภาคหลอดเลือดหัวใจ การวิเคราะห์คราบพลัคและการตีบ ตัวชี้วัดการทำงาน ฟิล์ม และรายงาน',
          caps: [
            ['สร้างภาพ CTA อัตโนมัติ','สร้างภาพหัวใจ 3 มิติ ต้นไม้หลอดเลือด และชุด CPR, MPR, MIP พร้อมตั้งชื่อหลอดเลือดและรองรับ stent, graft และ myocardial bridge'],
            ['วิเคราะห์คราบพลัคและการตีบ','แบ่งส่วนลูเมน ระบุคราบพลัคชนิดมีหินปูน ไม่มีหินปูน และชนิดผสม พร้อมวัดระดับการตีบ'],
            ['คะแนนแคลเซียมและการทำงานหัวใจ','คำนวณคะแนนแคลเซียมอัตโนมัติ และสนับสนุนการประเมินการบีบตัวกับปริมาณเลือดที่หัวใจสูบฉีด'],
            ['ตัวชี้วัดความเสี่ยงเชิงหน้าที่','เสริมด้วย CT-FFR ไขมันรอบหลอดเลือด และ TAG เพื่อช่วยประเมินภาวะขาดเลือดและความเสี่ยงจากคราบพลัค']
          ],
          flowHeading: 'CTA หนึ่งครั้ง สู่การประเมินหัวใจและหลอดเลือดที่กว้างขึ้น',
          flowIntro: 'การประมวลผลอัตโนมัติช่วยลดขั้นตอนบนเวิร์กสเตชัน โดยยังคงให้แพทย์ตรวจทานและตีความผล',
          steps: [
            ['รับ Coronary CTA','ส่งภาพ CT ไปยังเซิร์ฟเวอร์ AI โดยไม่ต้องประมวลผลด้วยมือทีละเคส'],
            ['สร้างภาพและวัดผล','ระบบแยกกายวิภาค ประเมินคราบพลัคและการตีบ และคำนวณตัวชี้วัดที่เลือก'],
            ['ตรวจฟิล์มและรายงาน','แพทย์ตรวจมุมมองแบบโต้ตอบ รูปแบบฟิล์ม และรายงานแบบมีโครงสร้าง']
          ],
          highlightHeading: 'ข้อมูลมากขึ้นจากขั้นตอน CTA เดียวกัน',
          highlightIntro: 'รวมกายวิภาค การทำงาน และเอกสาร เพื่อให้ทีมเปลี่ยนจากภาพดิบไปสู่ชุดข้อมูลพร้อมตรวจทาน',
          highlights: [
            ['ลดงานหลังประมวลผล','การแยก ตั้งชื่อ และจัดวางหลอดเลือดอัตโนมัติช่วยลดงานซ้ำ'],
            ['ดูรูปร่างและการทำงานร่วมกัน','ตรวจการตีบ คราบพลัค แคลเซียม และตัวชี้วัดการทำงานในขั้นตอนเดียว'],
            ['ผลลัพธ์เป็นมาตรฐาน','ปรับรูปแบบฟิล์มและรายงานข้อความหรือตารางให้เหมาะกับแผนกได้']
          ]
        }
      }
    },

    'head-neck-ai': {
      titleKey: 'headNeckAiTitle',
      categoryKey: 'specialtyEyebrow',
      summaryKey: 'headNeckAiDesc',
      images: ['assets/products/visual-head-neck-vascular.webp'],
      focusImage: 'assets/products/focus-head-neck-ai.jpg',
      tags: [{key:'headNeckCTA'},{key:'aneurysmDetection'},{key:'perfusionAnalysis'}],
      accent: '#b7a6ff',
      glow: '#725ae83b',
      details: {
        en: {
          facts: [
            ['NCCT · CTA · CTP','One pathway across key stroke imaging sequences'],
            ['≈3 min','Brochure-stated time for automated head-and-neck CTA reconstruction'],
            ['<3 mm','Micro-aneurysm analysis described in the supplied material']
          ],
          capHeading: 'A one-stop pathway for stroke and head-and-neck vascular imaging',
          capIntro: 'The manual brings NCCT, CTA and CTP together to support rapid lesion review, vascular assessment and perfusion analysis.',
          caps: [
            ['NCCT stroke assessment','Identifies and marks suspected ischaemic and haemorrhagic findings to support rapid initial review.'],
            ['CTA reconstruction without subtraction','Automatically separates vessels from bone, reconstructs head-and-neck vasculature and produces VR, VMIP, MIP and CPR views.'],
            ['Stenosis, plaque and aneurysm','Assesses vessel narrowing and plaque, and detects and quantifies suspected intracranial aneurysms.'],
            ['CT perfusion analysis','Calculates perfusion parameters, separates infarct core from penumbra and automatically reports mismatch information.']
          ],
          flowHeading: 'Three imaging sequences, one time-sensitive review path',
          flowIntro: 'Each modality contributes a different answer: tissue injury, vascular anatomy and perfusion viability.',
          steps: [
            ['Acquire stroke CT series','NCCT, CTA and CTP studies are received according to the selected emergency imaging protocol.'],
            ['Analyse by modality','AI marks suspected lesions, reconstructs vessels, assesses stenosis and aneurysms, and calculates perfusion maps.'],
            ['Review the complete picture','Clinicians review structured outputs together to support time-sensitive stroke assessment and treatment planning.']
          ],
          highlightHeading: 'Designed around the urgency of stroke imaging',
          highlightIntro: 'The solution reduces fragmented post-processing by keeping tissue, vessels and perfusion in a connected workflow.',
          highlights: [
            ['Faster emergency review','Automated processing helps surface relevant findings while the clinical team works within a narrow treatment window.'],
            ['Detailed vascular views','Automated bone removal and multiple reconstruction formats improve access to intracranial and cervical vessel anatomy.'],
            ['Standardised stroke pathway','Structured reports and film layouts support more consistent communication across radiology and stroke teams.']
          ]
        },
        'zh-cn': {
          facts: [
            ['NCCT · CTA · CTP','覆盖卒中关键影像序列的一体化流程'],
            ['约3分钟','手册列示的头颈CTA自动重建时间'],
            ['<3 mm','资料所述的微小动脉瘤分析范围']
          ],
          capHeading: '面向脑卒中与头颈血管影像的一站式流程',
          capIntro: '产品手册将NCCT、CTA与CTP结合，用于快速病灶复核、血管评估和灌注分析。',
          caps: [
            ['NCCT卒中评估','识别并标记疑似缺血与出血表现，支持急诊初筛和快速复核。'],
            ['无需减影的CTA重建','自动区分血管与骨组织，重建头颈血管，并生成VR、VMIP、MIP及CPR等视图。'],
            ['狭窄、斑块与动脉瘤','评估血管狭窄和斑块，并对疑似颅内动脉瘤进行检出与参数量化。'],
            ['CT脑灌注分析','计算灌注参数，区分梗死核心区与缺血半暗带，并自动提供Mismatch信息。']
          ],
          flowHeading: '三类影像序列，汇入一条时间敏感的审核路径',
          flowIntro: '不同序列分别回答脑组织损伤、血管解剖和灌注活性问题，并在同一流程中呈现。',
          steps: [
            ['接收卒中CT序列','按照所选急诊影像方案接收NCCT、CTA与CTP检查。'],
            ['按模态自动分析','AI标记可疑病灶、重建血管、评估狭窄与动脉瘤，并计算灌注参数图。'],
            ['综合审核结果','临床团队联合查看结构化结果，支持卒中快速评估与治疗方案讨论。']
          ],
          highlightHeading: '围绕卒中影像的时效要求设计',
          highlightIntro: '方案将脑组织、血管与灌注信息放在连续流程中，减少分散的后处理环节。',
          highlights: [
            ['加快急诊复核','自动处理帮助及时呈现相关征象，为处于有限治疗时间窗的团队提供支持。'],
            ['更完整的血管视图','自动去骨与多种重建格式便于查看颅内及颈部血管解剖。'],
            ['规范卒中流程','结构化报告与胶片版式帮助放射科和卒中团队更一致地沟通结果。']
          ]
        },
        'zh-tw': {
          facts: [
            ['NCCT · CTA · CTP','涵蓋卒中關鍵影像序列的一體化流程'],
            ['約3分鐘','手冊列示的頭頸CTA自動重建時間'],
            ['<3 mm','資料所述的微小動脈瘤分析範圍']
          ],
          capHeading: '面向腦卒中與頭頸血管影像的一站式流程',
          capIntro: '產品手冊將NCCT、CTA與CTP結合，用於快速病灶複核、血管評估和灌注分析。',
          caps: [
            ['NCCT卒中評估','識別並標記疑似缺血與出血表現，支援急診初篩和快速複核。'],
            ['無需減影的CTA重建','自動區分血管與骨組織，重建頭頸血管，並產生VR、VMIP、MIP及CPR等視圖。'],
            ['狹窄、斑塊與動脈瘤','評估血管狹窄和斑塊，並對疑似顱內動脈瘤進行偵測與參數量化。'],
            ['CT腦灌注分析','計算灌注參數，區分梗死核心區與缺血半暗帶，並自動提供Mismatch資訊。']
          ],
          flowHeading: '三類影像序列，匯入一條時間敏感的審核路徑',
          flowIntro: '不同序列分別回答腦組織損傷、血管解剖和灌注活性問題，並在同一流程中呈現。',
          steps: [
            ['接收卒中CT序列','按照所選急診影像方案接收NCCT、CTA與CTP檢查。'],
            ['按模態自動分析','AI標記可疑病灶、重建血管、評估狹窄與動脈瘤，並計算灌注參數圖。'],
            ['綜合審核結果','臨床團隊聯合查看結構化結果，支援卒中快速評估與治療方案討論。']
          ],
          highlightHeading: '圍繞卒中影像的時效要求設計',
          highlightIntro: '方案將腦組織、血管與灌注資訊放在連續流程中，減少分散的後處理環節。',
          highlights: [
            ['加快急診複核','自動處理協助及時呈現相關徵象，為處於有限治療時間窗的團隊提供支援。'],
            ['更完整的血管視圖','自動去骨與多種重建格式便於查看顱內及頸部血管解剖。'],
            ['規範卒中流程','結構化報告與膠片版式協助放射科和卒中團隊更一致地溝通結果。']
          ]
        },
        ms: {
          facts: [
            ['NCCT · CTA · CTP','Satu laluan merentasi siri pengimejan strok utama'],
            ['≈3 min','Masa pembinaan semula CTA yang dinyatakan dalam manual'],
            ['<3 mm','Analisis mikroaneurisme yang diterangkan dalam bahan']
          ],
          capHeading: 'Laluan sehenti untuk strok dan pengimejan vaskular kepala serta leher',
          capIntro: 'Manual menggabungkan NCCT, CTA dan CTP bagi menyokong semakan lesi, penilaian vaskular dan analisis perfusi.',
          caps: [
            ['Penilaian strok NCCT','Mengenal pasti dan menanda penemuan iskemia serta pendarahan yang disyaki untuk semakan awal pantas.'],
            ['CTA tanpa subtraksi','Memisahkan salur daripada tulang secara automatik dan menghasilkan pandangan VR, VMIP, MIP serta CPR.'],
            ['Stenosis, plak dan aneurisme','Menilai penyempitan serta plak, dan mengesan serta mengukur aneurisme intrakranium yang disyaki.'],
            ['Analisis perfusi CT','Mengira parameter perfusi, memisahkan teras infark daripada penumbra dan melaporkan maklumat mismatch.']
          ],
          flowHeading: 'Tiga siri pengimejan dalam satu laluan semakan sensitif masa',
          flowIntro: 'Setiap modaliti menjawab soalan berbeza tentang tisu, anatomi vaskular dan viabiliti perfusi.',
          steps: [
            ['Peroleh siri CT strok','Kajian NCCT, CTA dan CTP diterima mengikut protokol kecemasan yang dipilih.'],
            ['Analisis mengikut modaliti','AI menanda lesi, membina semula salur, menilai stenosis dan aneurisme serta mengira peta perfusi.'],
            ['Semak gambaran menyeluruh','Klinisi menilai output bersama untuk menyokong keputusan strok yang sensitif masa.']
          ],
          highlightHeading: 'Direka untuk keperluan segera pengimejan strok',
          highlightIntro: 'Penyelesaian menyambungkan maklumat tisu, salur dan perfusi dalam satu aliran.',
          highlights: [
            ['Semakan kecemasan lebih pantas','Pemprosesan automatik menyerlahkan penemuan berkaitan ketika pasukan bekerja dalam tetingkap rawatan sempit.'],
            ['Pandangan vaskular terperinci','Pembuangan tulang automatik dan pelbagai format pembinaan semula memudahkan semakan anatomi.'],
            ['Laluan strok standard','Laporan dan susun atur filem berstruktur menyokong komunikasi yang konsisten.']
          ]
        },
        th: {
          facts: [
            ['NCCT · CTA · CTP','ขั้นตอนเดียวครอบคลุมชุดภาพสำคัญของโรคหลอดเลือดสมอง'],
            ['≈3 นาที','เวลาสร้างภาพ CTA ศีรษะและคอที่คู่มือระบุ'],
            ['<3 มม.','ช่วงการวิเคราะห์หลอดเลือดโป่งพองขนาดเล็กตามเอกสาร']
          ],
          capHeading: 'ขั้นตอนแบบครบวงจรสำหรับโรคหลอดเลือดสมองและหลอดเลือดศีรษะคอ',
          capIntro: 'คู่มือรวม NCCT, CTA และ CTP เพื่อสนับสนุนการตรวจรอยโรค ประเมินหลอดเลือด และวิเคราะห์การไหลเวียน',
          caps: [
            ['ประเมินโรคหลอดเลือดสมองด้วย NCCT','ระบุและทำเครื่องหมายภาวะขาดเลือดหรือเลือดออกที่สงสัย เพื่อช่วยตรวจทานเบื้องต้นอย่างรวดเร็ว'],
            ['สร้าง CTA โดยไม่ต้องลบภาพ','แยกหลอดเลือดออกจากกระดูกอัตโนมัติ และสร้างมุมมอง VR, VMIP, MIP และ CPR'],
            ['การตีบ คราบพลัค และหลอดเลือดโป่งพอง','ประเมินการตีบและคราบพลัค พร้อมตรวจและวัดหลอดเลือดโป่งพองในกะโหลกที่สงสัย'],
            ['วิเคราะห์ CT Perfusion','คำนวณพารามิเตอร์ แยกแกนเนื้อสมองตายจาก penumbra และรายงานค่า mismatch อัตโนมัติ']
          ],
          flowHeading: 'ภาพสามชุดในเส้นทางตรวจทานที่ไวต่อเวลา',
          flowIntro: 'แต่ละโมดาลิตีตอบคำถามต่างกันเกี่ยวกับเนื้อสมอง กายวิภาคหลอดเลือด และความมีชีวิตของเนื้อเยื่อ',
          steps: [
            ['รับชุด CT โรคหลอดเลือดสมอง','รับ NCCT, CTA และ CTP ตามโปรโตคอลฉุกเฉินที่เลือก'],
            ['วิเคราะห์ตามโมดาลิตี','AI ทำเครื่องหมายรอยโรค สร้างภาพหลอดเลือด ประเมินการตีบและโป่งพอง และคำนวณแผนที่ perfusion'],
            ['ตรวจภาพรวมร่วมกัน','ทีมคลินิกตรวจผลแบบมีโครงสร้างร่วมกันเพื่อสนับสนุนการตัดสินใจที่รวดเร็ว']
          ],
          highlightHeading: 'ออกแบบตามความเร่งด่วนของภาพโรคหลอดเลือดสมอง',
          highlightIntro: 'เชื่อมข้อมูลเนื้อสมอง หลอดเลือด และการไหลเวียนไว้ในขั้นตอนต่อเนื่อง',
          highlights: [
            ['ตรวจฉุกเฉินเร็วขึ้น','การประมวลผลอัตโนมัติช่วยแสดงสิ่งสำคัญในช่วงเวลารักษาที่จำกัด'],
            ['มุมมองหลอดเลือดละเอียด','การลบกระดูกและรูปแบบการสร้างภาพหลายแบบช่วยให้เข้าถึงกายวิภาคได้ง่ายขึ้น'],
            ['ขั้นตอนเป็นมาตรฐาน','รายงานและฟิล์มแบบมีโครงสร้างช่วยให้ทีมสื่อสารผลได้สม่ำเสมอ']
          ]
        }
      }
    },

    'bone-age-analyser': {
      titleKey: 'boneAgeTitle',
      categoryKey: 'devicesEyebrow',
      summaryKey: 'boneAgeDesc',
      images: ['assets/products/visual-bone-age-device.webp','assets/products/visual-bone-age-analysis.webp'],
      focusImage: 'assets/products/focus-bone-age-analyser.jpg',
      tags: [{key:'nmpaApproved'}],
      accent: '#7ee7ff',
      glow: '#27bfe53d',
      details: {
        en: {
          facts: [
            ['<1 s','Brochure-stated exposure time'],
            ['80 cm','Source-to-image distance for consistent hand imaging'],
            ['0.25 m²','Compact equipment footprint']
          ],
          capHeading: 'Imaging, bone-age assessment and growth follow-up in one device',
          capIntro: 'The manual describes an integrated system that controls image acquisition and radiation protection, then carries the study through AI assessment and reporting.',
          caps: [
            ['Intelligent low-dose acquisition','Automatic focusing, one-touch capture and body-size-adaptive exposure are designed to produce clear hand images at an appropriate dose.'],
            ['Automated bone-age assessment','Automatically grades ossification features and supports multiple established assessment methods for consistent comparison.'],
            ['Growth and development review','Compares bone age with chronological age, supports adult-height prediction and tracks growth over repeated visits.'],
            ['Structured reporting and data','Generates bone-age and growth reports, supports multi-terminal registration and maintains longitudinal records for clinical or research use.']
          ],
          flowHeading: 'A shorter path from hand positioning to longitudinal follow-up',
          flowIntro: 'Hardware and software operate as a single chain, reducing handoffs between image capture, interpretation and reporting.',
          steps: [
            ['Register and position','Patient information is entered from phone, tablet or PC, and the hand is positioned through the shielded viewing area.'],
            ['Capture and assess','The device focuses and exposes the image, then AI evaluates skeletal features and calculates bone age.'],
            ['Review and follow','Clinicians review the assessment, growth projection and structured report, then compare future examinations over time.']
          ],
          highlightHeading: 'A compact platform for paediatric growth assessment',
          highlightIntro: 'The product combines a small footprint with controlled imaging and longitudinal data management.',
          highlights: [
            ['Simplified site requirements','The supplied specifications describe a 220 V, movable system with full shielding and no dedicated shielded room under applicable conditions.'],
            ['Repeatable assessment','Standardised acquisition and automated grading are intended to improve consistency across readers and follow-up visits.'],
            ['Clinical and research continuity','Longitudinal records support screening, diagnosis, treatment follow-up and structured research data collection.']
          ]
        },
        'zh-cn': {
          facts: [
            ['<1秒','手册列示的曝光时间'],
            ['80 cm','保持手部成像一致性的管片距'],
            ['0.25 m²','设备占地面积']
          ],
          capHeading: '将拍摄、骨龄评估与生长随访整合在一台设备中',
          capIntro: '手册展示了一套软硬件一体化系统：先完成图像采集与辐射防护，再进入AI骨龄评估和报告流程。',
          caps: [
            ['智能低剂量拍摄','通过自动对焦、一键成像及按体型调节的曝光模式，在控制剂量的同时获得清晰手部影像。'],
            ['自动骨龄评估','自动识别骨骺发育特征，并支持多种成熟骨龄评估方法，便于一致比较。'],
            ['生长发育分析','比较骨龄与实际年龄，支持成年身高预测，并在多次检查中持续跟踪生长情况。'],
            ['结构化报告与数据','自动生成骨龄及生长发育报告，支持手机、平板和PC录入，并保留临床或科研所需的纵向记录。']
          ],
          flowHeading: '从手部摆位到长期随访的更短路径',
          flowIntro: '软硬件在同一链路中工作，减少拍摄、评估和报告之间的转交环节。',
          steps: [
            ['登记与摆位','通过手机、平板或PC录入信息，并在带防护的可视区域完成手部摆位。'],
            ['拍摄与评估','设备自动对焦并完成曝光，随后由AI分析骨骼发育特征并计算骨龄。'],
            ['审核与随访','医师审核骨龄、身高预测和结构化报告，并在后续检查中进行纵向对比。']
          ],
          highlightHeading: '面向儿童生长发育评估的紧凑平台',
          highlightIntro: '产品把较小占地、受控成像与长期数据管理结合在一起。',
          highlights: [
            ['简化场地条件','资料规格显示设备使用220V电源、可移动并采用全屏蔽设计，在满足适用条件时无需专用屏蔽机房。'],
            ['提升评估一致性','标准化拍摄与自动骨骺分级有助于减少不同阅片人员和多次随访之间的差异。'],
            ['连接临床与科研','纵向记录可支持筛查、诊断、治疗随访以及规范化科研数据采集。']
          ]
        },
        'zh-tw': {
          facts: [
            ['<1秒','手冊列示的曝光時間'],
            ['80 cm','保持手部成像一致性的管片距'],
            ['0.25 m²','設備占地面積']
          ],
          capHeading: '將拍攝、骨齡評估與生長追蹤整合在一台設備中',
          capIntro: '手冊展示了一套軟硬體一體化系統：先完成影像採集與輻射防護，再進入AI骨齡評估和報告流程。',
          caps: [
            ['智能低劑量拍攝','透過自動對焦、一鍵成像及按體型調節的曝光模式，在控制劑量的同時獲得清晰手部影像。'],
            ['自動骨齡評估','自動識別骨骺發育特徵，並支援多種成熟骨齡評估方法，便於一致比較。'],
            ['生長發育分析','比較骨齡與實際年齡，支援成年身高預測，並在多次檢查中持續追蹤生長情況。'],
            ['結構化報告與資料','自動產生骨齡及生長發育報告，支援手機、平板和PC輸入，並保留臨床或科研所需的縱向紀錄。']
          ],
          flowHeading: '從手部擺位到長期追蹤的更短路徑',
          flowIntro: '軟硬體在同一鏈路中工作，減少拍攝、評估和報告之間的轉交環節。',
          steps: [
            ['登記與擺位','透過手機、平板或PC輸入資訊，並在帶防護的可視區域完成手部擺位。'],
            ['拍攝與評估','設備自動對焦並完成曝光，隨後由AI分析骨骼發育特徵並計算骨齡。'],
            ['審核與追蹤','醫師審核骨齡、身高預測和結構化報告，並在後續檢查中進行縱向比較。']
          ],
          highlightHeading: '面向兒童生長發育評估的緊湊平台',
          highlightIntro: '產品把較小占地、受控成像與長期資料管理結合在一起。',
          highlights: [
            ['簡化場地條件','資料規格顯示設備使用220V電源、可移動並採用全屏蔽設計，在符合適用條件時無需專用屏蔽機房。'],
            ['提升評估一致性','標準化拍攝與自動骨骺分級有助於減少不同閱片人員和多次追蹤之間的差異。'],
            ['連接臨床與科研','縱向紀錄可支援篩檢、診斷、治療追蹤以及規範化科研資料採集。']
          ]
        },
        ms: {
          facts: [
            ['<1 saat','Masa dedahan yang dinyatakan dalam manual'],
            ['80 cm','Jarak sumber-ke-imej untuk pengimejan tangan konsisten'],
            ['0.25 m²','Jejak peralatan yang padat']
          ],
          capHeading: 'Pengimejan, penilaian umur tulang dan susulan pertumbuhan dalam satu peranti',
          capIntro: 'Manual menerangkan sistem bersepadu yang mengawal pemerolehan imej dan perlindungan sinaran sebelum penilaian AI dan laporan.',
          caps: [
            ['Pemerolehan dos rendah pintar','Fokus automatik, tangkapan satu sentuhan dan dedahan mengikut saiz badan direka untuk menghasilkan imej tangan yang jelas.'],
            ['Penilaian umur tulang automatik','Menggred ciri osifikasi secara automatik dan menyokong beberapa kaedah penilaian yang mantap.'],
            ['Semakan tumbesaran','Membandingkan umur tulang dengan umur kronologi, menyokong ramalan ketinggian dewasa dan menjejak perubahan.'],
            ['Laporan dan data berstruktur','Menjana laporan umur tulang dan pertumbuhan, menyokong pendaftaran berbilang terminal serta menyimpan rekod longitudinal.']
          ],
          flowHeading: 'Laluan lebih pendek daripada kedudukan tangan kepada susulan',
          flowIntro: 'Perkakasan dan perisian beroperasi sebagai satu rantaian untuk mengurangkan pertukaran antara tangkapan, tafsiran dan laporan.',
          steps: [
            ['Daftar dan posisikan','Maklumat dimasukkan melalui telefon, tablet atau PC sebelum tangan diposisikan dalam ruang terlindung.'],
            ['Tangkap dan nilai','Peranti memfokus dan mendedahkan imej, kemudian AI menilai ciri rangka serta mengira umur tulang.'],
            ['Semak dan susuli','Klinisi menyemak penilaian, unjuran pertumbuhan dan laporan, kemudian membandingkan pemeriksaan seterusnya.']
          ],
          highlightHeading: 'Platform padat untuk penilaian pertumbuhan kanak-kanak',
          highlightIntro: 'Produk menggabungkan jejak kecil, pengimejan terkawal dan pengurusan data jangka panjang.',
          highlights: [
            ['Keperluan tapak dipermudah','Spesifikasi menerangkan sistem 220 V yang boleh bergerak, berperisai penuh dan tidak memerlukan bilik khusus apabila syarat dipenuhi.'],
            ['Penilaian lebih berulang','Pemerolehan standard dan penggredan automatik membantu meningkatkan konsistensi.'],
            ['Kesinambungan klinikal dan kajian','Rekod longitudinal menyokong saringan, diagnosis, susulan rawatan dan data penyelidikan.']
          ]
        },
        th: {
          facts: [
            ['<1 วินาที','เวลาเอกซเรย์ที่ระบุในคู่มือ'],
            ['80 ซม.','ระยะต้นกำเนิดถึงภาพเพื่อความสม่ำเสมอ'],
            ['0.25 ตร.ม.','พื้นที่ติดตั้งขนาดกะทัดรัด']
          ],
          capHeading: 'ถ่ายภาพ ประเมินอายุกระดูก และติดตามการเจริญเติบโตในอุปกรณ์เดียว',
          capIntro: 'คู่มืออธิบายระบบรวมที่ควบคุมการถ่ายภาพและการป้องกันรังสี ก่อนเข้าสู่การประเมินด้วย AI และรายงาน',
          caps: [
            ['ถ่ายภาพรังสีต่ำอัจฉริยะ','โฟกัสอัตโนมัติ ถ่ายด้วยปุ่มเดียว และปรับปริมาณรังสีตามขนาดร่างกาย เพื่อให้ภาพมือชัดเจน'],
            ['ประเมินอายุกระดูกอัตโนมัติ','จัดระดับลักษณะการสร้างกระดูกและรองรับวิธีประเมินมาตรฐานหลายแบบ'],
            ['วิเคราะห์การเจริญเติบโต','เปรียบเทียบอายุกระดูกกับอายุจริง สนับสนุนการคาดการณ์ส่วนสูง และติดตามการเปลี่ยนแปลง'],
            ['รายงานและข้อมูลแบบมีโครงสร้าง','สร้างรายงานอายุกระดูกและการเติบโต รองรับการลงทะเบียนหลายอุปกรณ์ และเก็บข้อมูลระยะยาว']
          ],
          flowHeading: 'เส้นทางสั้นลงจากการจัดมือถึงการติดตามระยะยาว',
          flowIntro: 'ฮาร์ดแวร์และซอฟต์แวร์ทำงานเป็นสายเดียว ลดการส่งต่อระหว่างถ่ายภาพ ประเมิน และรายงาน',
          steps: [
            ['ลงทะเบียนและจัดท่า','กรอกข้อมูลผ่านโทรศัพท์ แท็บเล็ต หรือ PC แล้วจัดมือในพื้นที่มีการป้องกัน'],
            ['ถ่ายและประเมิน','อุปกรณ์โฟกัสและถ่ายภาพ จากนั้น AI วิเคราะห์ลักษณะกระดูกและคำนวณอายุ'],
            ['ตรวจทานและติดตาม','แพทย์ตรวจอายุกระดูก การคาดการณ์ส่วนสูง และรายงาน ก่อนเปรียบเทียบในการตรวจครั้งถัดไป']
          ],
          highlightHeading: 'แพลตฟอร์มกะทัดรัดสำหรับการเติบโตของเด็ก',
          highlightIntro: 'รวมพื้นที่ติดตั้งขนาดเล็ก การถ่ายภาพที่ควบคุมได้ และการจัดการข้อมูลระยะยาว',
          highlights: [
            ['เงื่อนไขติดตั้งง่ายขึ้น','สเปกระบุระบบ 220 V เคลื่อนย้ายได้ มีเกราะป้องกันเต็มรูปแบบ และไม่ต้องใช้ห้องเฉพาะเมื่อเป็นไปตามเงื่อนไข'],
            ['การประเมินสม่ำเสมอ','การถ่ายมาตรฐานและการจัดระดับอัตโนมัติช่วยลดความต่างระหว่างผู้อ่านและการติดตาม'],
            ['เชื่อมคลินิกกับงานวิจัย','ข้อมูลระยะยาวรองรับการคัดกรอง วินิจฉัย ติดตามการรักษา และเก็บข้อมูลงานวิจัย']
          ]
        }
      }
    },

    'bone-density-analyser': {
      titleKey: 'boneDensityTitle',
      categoryKey: 'devicesEyebrow',
      summaryKey: 'boneDensityDesc',
      images: ['assets/products/visual-bone-density-device.webp','assets/products/visual-bone-density-analysis.webp'],
      focusImage: 'assets/products/focus-bone-density-analyser.jpg',
      tags: [{key:'boneDensityMeasurement'},{key:'exemptionFiling'},{key:'structuredReport'}],
      accent: '#85d9ff',
      glow: '#4698ed36',
      details: {
        en: {
          facts: [
            ['≈2 s','Brochure-stated image acquisition time'],
            ['≥2 LP/mm','Detector resolution stated in the supplied material'],
            ['0.2 m²','Compact equipment footprint']
          ],
          capHeading: 'Consistent forearm bone-density measurement with intelligent positioning',
          capIntro: 'The device combines dual-energy X-ray acquisition, laser distance measurement and automatic bone segmentation to support repeatable radial assessment.',
          caps: [
            ['Laser-guided positioning','Uses a grip and laser distance measurement to establish radial length and standardise the measurement position.'],
            ['Automatic radius and ulna segmentation','Segments bone boundaries, removes adjacent soft tissue and selects the one-third radius region for analysis.'],
            ['Same-site longitudinal follow-up','Intelligent positioning helps repeat measurements at the same anatomical site across follow-up visits.'],
            ['Complete report output','Generates images, reference curves, bone-density values, configurable clinical suggestions and longitudinal comparisons.']
          ],
          flowHeading: 'Position, expose, analyse and compare',
          flowIntro: 'The workflow is designed to minimise manual boundary adjustment while preserving a clear path to review and follow-up.',
          steps: [
            ['Position the forearm','The patient uses the grip while laser measurement and live viewing help confirm the forearm position.'],
            ['Acquire and segment','A flat-panel exposure captures the image, then AI segments the radius and ulna and selects the analysis site.'],
            ['Review and follow','The system produces the measurement and report, with prior results available for same-site comparison.']
          ],
          highlightHeading: 'Compact hardware with flexible hospital connectivity',
          highlightIntro: 'The manual describes a shielded, movable system that can work independently or connect to a hospital network.',
          highlights: [
            ['Space-efficient operation','The approximately 507 × 320 × 490 mm unit occupies about 0.2 m² and is designed for desktop use.'],
            ['Wireless clinical control','Tablet or computer operation supports remote positioning, real-time viewing and convenient clinician-patient interaction.'],
            ['Standalone or networked','The device can generate reports locally or send results through the hospital LAN for department-wide access.']
          ]
        },
        'zh-cn': {
          facts: [
            ['约2秒','手册列示的图像采集时间'],
            ['≥2 LP/mm','资料列示的探测器分辨率'],
            ['0.2 m²','设备占地面积']
          ],
          capHeading: '通过智能定位实现一致的前臂骨密度测量',
          capIntro: '设备将双能X线采集、激光测距与骨骼自动分割结合，用于提升桡骨测量的可重复性。',
          caps: [
            ['激光引导定位','利用抓握手柄和激光测距确定桡骨长度，并规范测量位置。'],
            ['尺桡骨自动分割','自动分割尺骨与桡骨边界，去除边缘软组织，并选取桡骨三分之一处进行分析。'],
            ['同部位纵向随访','智能定位设计帮助多次检查在同一解剖部位完成测量，便于长期比较。'],
            ['完整报告输出','自动生成影像、参考曲线、骨密度值、可配置临床建议和多次检查对比。']
          ],
          flowHeading: '摆位、曝光、分析与对比',
          flowIntro: '流程减少手动勾画骨边缘和反复调整位置，同时保留清晰的审核与随访路径。',
          steps: [
            ['完成前臂摆位','受检者抓握手柄，通过激光测距和实时画面确认前臂位置。'],
            ['采集与分割','平板探测器完成一次曝光，随后AI分割尺桡骨并选取分析部位。'],
            ['审核与随访','系统生成测量结果和报告，并提供历史结果用于同部位对比。']
          ],
          highlightHeading: '紧凑硬件与灵活的院内连接方式',
          highlightIntro: '手册展示了一套全屏蔽、可移动的设备，可独立工作，也可连接医院局域网。',
          highlights: [
            ['节省空间','设备约507 × 320 × 490 mm，占地约0.2 m²，适合桌面放置。'],
            ['无线临床操作','平板或电脑操作支持远台摆位、实时观察及更方便的医患互动。'],
            ['独立或联网部署','设备可本地生成报告，也可将结果推送至医院局域网供各科室调阅。']
          ]
        },
        'zh-tw': {
          facts: [
            ['約2秒','手冊列示的影像採集時間'],
            ['≥2 LP/mm','資料列示的探測器解析度'],
            ['0.2 m²','設備占地面積']
          ],
          capHeading: '透過智能定位實現一致的前臂骨密度測量',
          capIntro: '設備將雙能X線採集、雷射測距與骨骼自動分割結合，用於提升橈骨測量的可重複性。',
          caps: [
            ['雷射引導定位','利用抓握手柄和雷射測距確定橈骨長度，並規範測量位置。'],
            ['尺橈骨自動分割','自動分割尺骨與橈骨邊界，去除邊緣軟組織，並選取橈骨三分之一處進行分析。'],
            ['同部位縱向追蹤','智能定位設計協助多次檢查在同一解剖部位完成測量，便於長期比較。'],
            ['完整報告輸出','自動產生影像、參考曲線、骨密度值、可設定臨床建議和多次檢查比較。']
          ],
          flowHeading: '擺位、曝光、分析與比較',
          flowIntro: '流程減少手動勾畫骨邊緣和反覆調整位置，同時保留清晰的審核與追蹤路徑。',
          steps: [
            ['完成前臂擺位','受檢者抓握手柄，透過雷射測距和即時畫面確認前臂位置。'],
            ['採集與分割','平板探測器完成一次曝光，隨後AI分割尺橈骨並選取分析部位。'],
            ['審核與追蹤','系統產生測量結果和報告，並提供歷史結果用於同部位比較。']
          ],
          highlightHeading: '緊湊硬體與靈活的院內連接方式',
          highlightIntro: '手冊展示了一套全屏蔽、可移動的設備，可獨立工作，也可連接醫院區域網路。',
          highlights: [
            ['節省空間','設備約507 × 320 × 490 mm，占地約0.2 m²，適合桌面放置。'],
            ['無線臨床操作','平板或電腦操作支援遠端擺位、即時觀察及更方便的醫病互動。'],
            ['獨立或聯網部署','設備可在本地產生報告，也可將結果推送至醫院區域網路供各科室調閱。']
          ]
        },
        ms: {
          facts: [
            ['≈2 saat','Masa pemerolehan imej yang dinyatakan dalam manual'],
            ['≥2 LP/mm','Resolusi pengesan dalam bahan yang dibekalkan'],
            ['0.2 m²','Jejak peralatan yang padat']
          ],
          capHeading: 'Pengukuran ketumpatan tulang lengan bawah yang konsisten',
          capIntro: 'Peranti menggabungkan sinar-X dwi-tenaga, pengukuran laser dan segmentasi tulang automatik untuk penilaian radius yang berulang.',
          caps: [
            ['Kedudukan berpandukan laser','Menggunakan pemegang dan ukuran laser untuk menentukan panjang radius serta menyeragamkan tapak ukuran.'],
            ['Segmentasi radius dan ulna','Membahagi sempadan tulang, menyingkirkan tisu lembut bersebelahan dan memilih kawasan satu pertiga radius.'],
            ['Susulan di tapak yang sama','Kedudukan pintar membantu mengulangi pengukuran di tapak anatomi yang sama.'],
            ['Output laporan lengkap','Menjana imej, lengkung rujukan, nilai ketumpatan, cadangan boleh konfigurasi dan perbandingan longitudinal.']
          ],
          flowHeading: 'Posisikan, dedahkan, analisis dan bandingkan',
          flowIntro: 'Aliran mengurangkan pelarasan sempadan manual sambil mengekalkan laluan semakan dan susulan yang jelas.',
          steps: [
            ['Posisikan lengan bawah','Pesakit memegang pemegang sementara ukuran laser dan paparan langsung mengesahkan kedudukan.'],
            ['Peroleh dan segmen','Dedahan panel rata menangkap imej, kemudian AI membahagi radius serta ulna dan memilih tapak analisis.'],
            ['Semak dan susuli','Sistem menghasilkan ukuran dan laporan dengan hasil terdahulu untuk perbandingan tapak sama.']
          ],
          highlightHeading: 'Perkakasan padat dengan sambungan hospital fleksibel',
          highlightIntro: 'Manual menerangkan sistem terlindung dan boleh bergerak yang berfungsi sendiri atau melalui rangkaian hospital.',
          highlights: [
            ['Operasi jimat ruang','Unit kira-kira 507 × 320 × 490 mm menggunakan sekitar 0.2 m² dan sesuai di atas meja.'],
            ['Kawalan klinikal tanpa wayar','Tablet atau komputer menyokong kedudukan jauh dan paparan masa nyata.'],
            ['Kendiri atau berangkaian','Laporan boleh dijana setempat atau dihantar melalui LAN hospital.']
          ]
        },
        th: {
          facts: [
            ['≈2 วินาที','เวลารับภาพที่ระบุในคู่มือ'],
            ['≥2 LP/mm','ความละเอียดตัวตรวจจับตามเอกสาร'],
            ['0.2 ตร.ม.','พื้นที่ติดตั้งขนาดกะทัดรัด']
          ],
          capHeading: 'วัดความหนาแน่นกระดูกปลายแขนอย่างสม่ำเสมอด้วยการจัดตำแหน่งอัจฉริยะ',
          capIntro: 'รวมเอกซเรย์พลังงานคู่ การวัดระยะด้วยเลเซอร์ และการแบ่งส่วนกระดูกอัตโนมัติ เพื่อให้การวัดกระดูกเรเดียสทำซ้ำได้',
          caps: [
            ['จัดตำแหน่งด้วยเลเซอร์','ใช้ด้ามจับและเลเซอร์กำหนดความยาวกระดูกเรเดียสและทำให้ตำแหน่งวัดเป็นมาตรฐาน'],
            ['แบ่งส่วนเรเดียสและอัลนา','แบ่งขอบกระดูกอัตโนมัติ ตัดเนื้อเยื่ออ่อน และเลือกบริเวณหนึ่งในสามของเรเดียส'],
            ['ติดตามจุดเดิม','การจัดตำแหน่งอัจฉริยะช่วยให้วัดซ้ำที่ตำแหน่งกายวิภาคเดียวกัน'],
            ['รายงานครบถ้วน','สร้างภาพ เส้นอ้างอิง ค่าความหนาแน่น คำแนะนำที่ปรับได้ และการเปรียบเทียบระยะยาว']
          ],
          flowHeading: 'จัดตำแหน่ง ถ่าย วิเคราะห์ และเปรียบเทียบ',
          flowIntro: 'ลดการปรับขอบกระดูกด้วยมือ โดยยังคงขั้นตอนตรวจทานและติดตามที่ชัดเจน',
          steps: [
            ['จัดปลายแขน','ผู้รับการตรวจจับด้าม ขณะที่เลเซอร์และภาพสดช่วยยืนยันตำแหน่ง'],
            ['รับภาพและแบ่งส่วน','แผงรับภาพถ่ายหนึ่งครั้ง จากนั้น AI แบ่งเรเดียสกับอัลนาและเลือกจุดวิเคราะห์'],
            ['ตรวจทานและติดตาม','ระบบสร้างผลและรายงาน พร้อมประวัติสำหรับเปรียบเทียบตำแหน่งเดิม']
          ],
          highlightHeading: 'ฮาร์ดแวร์กะทัดรัด เชื่อมต่อโรงพยาบาลได้ยืดหยุ่น',
          highlightIntro: 'คู่มืออธิบายระบบมีเกราะป้องกัน เคลื่อนย้ายได้ และทำงานเดี่ยวหรือผ่านเครือข่ายโรงพยาบาล',
          highlights: [
            ['ประหยัดพื้นที่','อุปกรณ์ประมาณ 507 × 320 × 490 มม. ใช้พื้นที่ราว 0.2 ตร.ม. และวางบนโต๊ะได้'],
            ['ควบคุมไร้สาย','แท็บเล็ตหรือคอมพิวเตอร์รองรับการจัดตำแหน่งระยะไกลและดูภาพสด'],
            ['เดี่ยวหรือเชื่อมเครือข่าย','สร้างรายงานในเครื่องหรือส่งผ่าน LAN ให้แผนกต่าง ๆ ดูได้']
          ]
        }
      }
    },

    'ct-lung': {
      title: 'CT Lung',
      categoryKey: 'screeningDiagnosis',
      summaryKey: 'ctLungDesc',
      images: ['assets/products/visual-ct-lung.webp'],
      focusImage: 'assets/products/focus-ct-lung.jpg',
      tags: [{key:'chestCT'},{key:'ceMarked'},{key:'fdaCleared'},{key:'nmpaApproved'},{key:'ukcaMarked'}],
      accent: '#6ce6d0',
      glow: '#22d6b33c',
      details: {
        en: {
          facts: [
            ['4 mm','Smallest nodule size described in the supplied presentation'],
            ['4 types','Pure GGN, solid, mixed GGN and suspected tumour'],
            ['Big 3','Lung nodules, coronary calcium and COPD indicators']
          ],
          capHeading: 'Beyond nodule detection: a quantitative view of whole-lung health',
          capIntro: 'The supplied presentation combines lung-cancer screening, opportunistic findings, longitudinal comparison and structured reporting.',
          caps: [
            ['Nodule detection and typing','Detects pulmonary nodules and classifies key patterns including pure ground-glass, solid and mixed ground-glass nodules.'],
            ['Growth tracking','Measures and compares nodules across examinations to help clinicians assess interval change.'],
            ['Whole-lung quantification','Analyses lobe-level density and volume and supports review of emphysema, interstitial disease and other abnormal density patterns.'],
            ['Opportunistic screening and reports','Brings lung nodules, coronary artery calcification and COPD-related indicators into a structured report integrated with the imaging workflow.']
          ],
          flowHeading: 'Chest CT becomes a longitudinal lung-health record',
          flowIntro: 'Detection, measurement and comparison are organised so the reader can move from a current scan to a broader assessment.',
          steps: [
            ['Analyse the chest CT','AI scans the lung fields for nodules and other density abnormalities while segmenting lobar anatomy.'],
            ['Classify and quantify','Findings are typed, measured and compared with prior studies; lung volumes and selected secondary indicators are calculated.'],
            ['Review the structured report','The clinician reviews marked images, quantitative tables and the generated report within the existing workflow.']
          ],
          highlightHeading: 'Suitable for screening and opportunistic case finding',
          highlightIntro: 'The solution uses one chest CT to support both focused nodule review and a broader quantitative assessment.',
          highlights: [
            ['Early nodule visibility','Small-nodule detection and visual marking support lung-cancer screening and incidental case review.'],
            ['Objective follow-up','Measurements and interval comparison help document whether a nodule is stable or changing.'],
            ['Broader chest insight','Lobar quantification and selected comorbidity indicators help extract more value from the same examination.']
          ]
        },
        'zh-cn': {
          facts: [
            ['4 mm','资料中描述的最小结节检出尺度'],
            ['4类','纯磨玻璃、实性、混合磨玻璃与疑似肿瘤'],
            ['三大疾病','肺结节、冠脉钙化与COPD相关指标']
          ],
          capHeading: '不止检出结节，也提供全肺健康的定量视图',
          capIntro: '资料将肺癌筛查、机会性发现、纵向比较和结构化报告整合在同一产品中。',
          caps: [
            ['结节检出与分类','检出肺结节，并识别纯磨玻璃、实性及混合磨玻璃等关键影像类型。'],
            ['结节生长追踪','对不同检查中的结节进行测量与对比，辅助医师判断随时间发生的变化。'],
            ['全肺定量分析','分析各肺叶密度与体积，并支持肺气肿、间质性肺病及其他异常密度模式的复核。'],
            ['机会性筛查与报告','将肺结节、冠状动脉钙化和COPD相关指标整理进可与影像流程连接的结构化报告。']
          ],
          flowHeading: '让胸部CT形成可纵向追踪的肺健康记录',
          flowIntro: '系统组织检出、测量和对比结果，使阅片人员能够从本次扫描延伸到更完整的评估。',
          steps: [
            ['分析胸部CT','AI扫描肺野中的结节和其他密度异常，同时完成肺叶结构分割。'],
            ['分类与量化','对发现进行分型、测量并与既往检查比较，同时计算肺容积和部分相关指标。'],
            ['审核结构化报告','医师在现有流程中查看标记影像、定量表格及系统生成的报告。']
          ],
          highlightHeading: '同时适用于筛查与机会性病例发现',
          highlightIntro: '方案利用一次胸部CT兼顾结节重点复核与更广泛的定量评估。',
          highlights: [
            ['提升早期结节可见性','小结节检出与可视化标记可支持肺癌筛查和偶发病例复核。'],
            ['客观纵向随访','测量与间隔对比帮助记录结节是否稳定或发生变化。'],
            ['扩展胸部信息价值','肺叶定量和部分共病相关指标帮助从同一次检查中获得更多信息。']
          ]
        },
        'zh-tw': {
          facts: [
            ['4 mm','資料中描述的最小結節偵測尺度'],
            ['4類','純磨玻璃、實性、混合磨玻璃與疑似腫瘤'],
            ['三大疾病','肺結節、冠脈鈣化與COPD相關指標']
          ],
          capHeading: '不只偵測結節，也提供全肺健康的定量視圖',
          capIntro: '資料將肺癌篩檢、機會性發現、縱向比較和結構化報告整合在同一產品中。',
          caps: [
            ['結節偵測與分類','偵測肺結節，並識別純磨玻璃、實性及混合磨玻璃等關鍵影像類型。'],
            ['結節生長追蹤','對不同檢查中的結節進行測量與比較，協助醫師判斷隨時間發生的變化。'],
            ['全肺定量分析','分析各肺葉密度與體積，並支援肺氣腫、間質性肺病及其他異常密度模式的複核。'],
            ['機會性篩檢與報告','將肺結節、冠狀動脈鈣化和COPD相關指標整理進可與影像流程連接的結構化報告。']
          ],
          flowHeading: '讓胸部CT形成可縱向追蹤的肺健康紀錄',
          flowIntro: '系統組織偵測、測量和比較結果，使閱片人員能夠從本次掃描延伸到更完整的評估。',
          steps: [
            ['分析胸部CT','AI掃描肺野中的結節和其他密度異常，同時完成肺葉結構分割。'],
            ['分類與量化','對發現進行分型、測量並與既往檢查比較，同時計算肺容積和部分相關指標。'],
            ['審核結構化報告','醫師在現有流程中查看標記影像、定量表格及系統產生的報告。']
          ],
          highlightHeading: '同時適用於篩檢與機會性病例發現',
          highlightIntro: '方案利用一次胸部CT兼顧結節重點複核與更廣泛的定量評估。',
          highlights: [
            ['提升早期結節可見性','小結節偵測與視覺化標記可支援肺癌篩檢和偶發病例複核。'],
            ['客觀縱向追蹤','測量與間隔比較協助記錄結節是否穩定或發生變化。'],
            ['擴展胸部資訊價值','肺葉定量和部分共病相關指標協助從同一次檢查中獲得更多資訊。']
          ]
        },
        ms: {
          facts: [
            ['4 mm','Saiz nodul terkecil yang diterangkan dalam bahan'],
            ['4 jenis','GGN tulen, pepejal, GGN campuran dan tumor disyaki'],
            ['Big 3','Nodul paru-paru, kalsium koronari dan petunjuk COPD']
          ],
          capHeading: 'Lebih daripada pengesanan nodul: pandangan kuantitatif seluruh paru-paru',
          capIntro: 'Bahan menggabungkan saringan kanser paru-paru, penemuan oportunistik, perbandingan longitudinal dan laporan berstruktur.',
          caps: [
            ['Pengesanan dan pengelasan nodul','Mengesan nodul dan mengelaskan corak utama termasuk ground-glass tulen, pepejal dan campuran.'],
            ['Penjejakan pertumbuhan','Mengukur dan membandingkan nodul antara pemeriksaan untuk menilai perubahan.'],
            ['Kuantifikasi seluruh paru-paru','Menganalisis ketumpatan serta isipadu lobus dan menyokong semakan emfisema serta penyakit interstisial.'],
            ['Saringan oportunistik dan laporan','Menggabungkan nodul, kalsifikasi arteri koronari dan petunjuk COPD ke dalam laporan berstruktur.']
          ],
          flowHeading: 'CT dada menjadi rekod kesihatan paru-paru longitudinal',
          flowIntro: 'Pengesanan, ukuran dan perbandingan disusun untuk membawa pembaca daripada imbasan semasa kepada penilaian lebih luas.',
          steps: [
            ['Analisis CT dada','AI mengimbas nodul dan ketumpatan abnormal sambil membahagi anatomi lobus.'],
            ['Kelas dan ukur','Penemuan dikelaskan, diukur dan dibandingkan dengan kajian terdahulu; isipadu serta petunjuk terpilih dikira.'],
            ['Semak laporan berstruktur','Klinisi menyemak imej bertanda, jadual kuantitatif dan laporan dalam aliran sedia ada.']
          ],
          highlightHeading: 'Untuk saringan dan penemuan kes oportunistik',
          highlightIntro: 'Satu CT dada menyokong semakan nodul tertumpu serta penilaian kuantitatif yang lebih luas.',
          highlights: [
            ['Keterlihatan nodul awal','Pengesanan nodul kecil dan penandaan visual menyokong saringan serta semakan penemuan insidental.'],
            ['Susulan objektif','Ukuran dan perbandingan membantu mendokumentasikan kestabilan atau perubahan nodul.'],
            ['Wawasan dada lebih luas','Kuantifikasi lobus dan petunjuk komorbiditi memberi lebih nilai daripada pemeriksaan sama.']
          ]
        },
        th: {
          facts: [
            ['4 มม.','ขนาดก้อนเล็กสุดที่อธิบายในเอกสาร'],
            ['4 ชนิด','Pure GGN, solid, mixed GGN และเนื้องอกที่สงสัย'],
            ['Big 3','ก้อนปอด แคลเซียมหลอดเลือดหัวใจ และตัวชี้วัด COPD']
          ],
          capHeading: 'มากกว่าการตรวจหาก้อน ด้วยภาพเชิงปริมาณของปอดทั้งหมด',
          capIntro: 'เอกสารรวมการคัดกรองมะเร็งปอด การค้นพบโดยบังเอิญ การเปรียบเทียบระยะยาว และรายงานแบบมีโครงสร้าง',
          caps: [
            ['ตรวจและจำแนกก้อน','ตรวจหาก้อนปอดและจำแนกรูปแบบสำคัญ เช่น ground-glass ล้วน ก้อนทึบ และชนิดผสม'],
            ['ติดตามการเติบโต','วัดและเปรียบเทียบก้อนระหว่างการตรวจ เพื่อช่วยประเมินการเปลี่ยนแปลง'],
            ['วิเคราะห์ปอดเชิงปริมาณ','วิเคราะห์ความหนาแน่นและปริมาตรแต่ละกลีบ พร้อมช่วยตรวจภาวะถุงลมโป่งพองและโรคเนื้อปอด'],
            ['คัดกรองเสริมและรายงาน','รวมก้อนปอด แคลเซียมหลอดเลือดหัวใจ และตัวชี้วัด COPD ในรายงานแบบมีโครงสร้าง']
          ],
          flowHeading: 'เปลี่ยน CT ทรวงอกเป็นบันทึกสุขภาพปอดระยะยาว',
          flowIntro: 'จัดการผลการตรวจ วัด และเปรียบเทียบ เพื่อให้ผู้อ่านมองจากการสแกนปัจจุบันไปสู่ภาพรวมที่กว้างขึ้น',
          steps: [
            ['วิเคราะห์ CT ทรวงอก','AI ตรวจปอดหาก้อนและความหนาแน่นผิดปกติ พร้อมแบ่งกลีบปอด'],
            ['จำแนกและวัด','จำแนก วัด และเปรียบเทียบกับการตรวจก่อนหน้า พร้อมคำนวณปริมาตรและตัวชี้วัด'],
            ['ตรวจรายงาน','แพทย์ดูภาพที่ทำเครื่องหมาย ตารางเชิงปริมาณ และรายงานในขั้นตอนเดิม']
          ],
          highlightHeading: 'เหมาะสำหรับการคัดกรองและค้นหาโรคโดยบังเอิญ',
          highlightIntro: 'CT ทรวงอกหนึ่งครั้งรองรับทั้งการตรวจทานก้อนและการประเมินเชิงปริมาณที่กว้างขึ้น',
          highlights: [
            ['มองเห็นก้อนระยะแรก','การตรวจหาก้อนเล็กและทำเครื่องหมายช่วยการคัดกรองและตรวจสิ่งที่พบโดยบังเอิญ'],
            ['ติดตามอย่างเป็นกลาง','การวัดและเปรียบเทียบช่วยบันทึกว่าก้อนคงที่หรือเปลี่ยนแปลง'],
            ['ข้อมูลทรวงอกมากขึ้น','การวัดแต่ละกลีบและตัวชี้วัดร่วมช่วยเพิ่มคุณค่าจากการตรวจเดียวกัน']
          ]
        }
      }
    },

    'dr-chest': {
      title: 'DR Chest',
      categoryKey: 'screeningDiagnosis',
      summaryKey: 'drChestDesc',
      images: ['assets/products/visual-dr-chest.webp'],
      focusImage: 'assets/products/focus-dr-chest.jpg',
      tags: [{key:'chestXray'},{key:'ceMarked'},{key:'ukcaMarked'}],
      accent: '#74c7ff',
      glow: '#268edc3c',
      details: {
        en: {
          facts: [
            ['20+','Lesion labels across chest X-ray review'],
            ['≈14 s','Average prediction time stated in the supplied presentation'],
            ['Configurable','Report content can be adapted to the workflow']
          ],
          capHeading: 'Fast chest X-ray triage with visible findings and configurable output',
          capIntro: 'The presentation describes a system that labels abnormalities, highlights risk and produces report content across routine examination and tuberculosis screening.',
          caps: [
            ['Broad abnormality coverage','Supports review of findings including fracture, pneumothorax, pleural effusion, cardiac enlargement, aortic change and abnormal lung fields.'],
            ['Marked images and warnings','Displays lesion location, abnormality probability and conspicuous warnings on the study for rapid review.'],
            ['Tuberculosis screening support','Supports computer-assisted TB screening review in community and healthcare settings for the population described in the supplied material.'],
            ['Configurable reporting','Automatically creates inspection results from AI predictions, with report content configurable to departmental needs.']
          ],
          flowHeading: 'From chest radiograph to prioritised review in seconds',
          flowIntro: 'The product organises labels, warnings and report text so readers can focus attention where it is most needed.',
          steps: [
            ['Receive the radiograph','The chest X-ray enters the system with the available study and inspection information.'],
            ['Predict and label','AI analyses the image, marks suspected findings and presents abnormality probabilities and warnings.'],
            ['Review and report','The reader confirms or edits the findings and completes the configured report within the clinical workflow.']
          ],
          highlightHeading: 'Built for high-throughput chest screening',
          highlightIntro: 'Rapid prediction and broad lesion coverage help imaging teams manage routine examinations and targeted TB screening.',
          highlights: [
            ['Prioritised attention','Warnings and abnormality probabilities help readers identify studies that may need earlier review.'],
            ['Whole-chest perspective','More than twenty lesion labels extend support beyond a single disease pathway.'],
            ['Adaptable reporting','Configurable content allows departments to align output with local screening and reporting practice.']
          ]
        },
        'zh-cn': {
          facts: [
            ['20+','覆盖胸部X线阅片的病灶标签'],
            ['约14秒','资料列示的平均预测时间'],
            ['可配置','报告内容可按工作流程调整']
          ],
          capHeading: '以可视化征象与可配置输出支持快速胸片分诊',
          capIntro: '资料展示了覆盖常规体检与结核筛查的工作流程：标记异常、提示风险并自动生成报告内容。',
          caps: [
            ['广泛异常覆盖','支持复核骨折、气胸、胸腔积液、心影增大、主动脉改变及肺野异常等多类征象。'],
            ['病灶标记与预警','在影像上呈现病灶位置、异常概率和醒目提示，便于快速阅片。'],
            ['结核病筛查支持','在资料所述适用人群和场景中，为社区及医疗机构的计算机辅助结核筛查提供支持。'],
            ['可配置报告','根据AI预测自动形成检查结果，并允许科室按实际需求配置报告内容。']
          ],
          flowHeading: '从胸片到数秒级的优先阅片提示',
          flowIntro: '系统把标签、预警和报告文字整理在一起，使阅片人员更快关注需要重点复核的区域。',
          steps: [
            ['接收胸部X线','系统接收胸片及可用的检查基础信息。'],
            ['预测与标记','AI分析影像、标记疑似征象，并显示异常概率与预警。'],
            ['审核与报告','阅片人员确认或修改结果，并在临床流程中完成配置好的报告。']
          ],
          highlightHeading: '面向高通量胸部筛查设计',
          highlightIntro: '快速预测与广泛病灶覆盖帮助影像团队兼顾常规体检和针对性结核筛查。',
          highlights: [
            ['提示阅片优先级','预警和异常概率帮助阅片人员识别可能需要更早复核的检查。'],
            ['覆盖整个胸部','二十余种病灶标签使产品能力不局限于单一疾病。'],
            ['适配报告习惯','可配置内容便于科室结合本地筛查与报告规范调整输出。']
          ]
        },
        'zh-tw': {
          facts: [
            ['20+','涵蓋胸部X線閱片的病灶標籤'],
            ['約14秒','資料列示的平均預測時間'],
            ['可設定','報告內容可按工作流程調整']
          ],
          capHeading: '以視覺化徵象與可設定輸出支援快速胸片分診',
          capIntro: '資料展示了涵蓋常規體檢與結核篩檢的工作流程：標記異常、提示風險並自動產生報告內容。',
          caps: [
            ['廣泛異常涵蓋','支援複核骨折、氣胸、胸腔積液、心影增大、主動脈改變及肺野異常等多類徵象。'],
            ['病灶標記與預警','在影像上呈現病灶位置、異常機率和醒目提示，便於快速閱片。'],
            ['結核病篩檢支援','在資料所述適用人群和場景中，為社區及醫療機構的電腦輔助結核篩檢提供支援。'],
            ['可設定報告','根據AI預測自動形成檢查結果，並允許科室按實際需求設定報告內容。']
          ],
          flowHeading: '從胸片到數秒級的優先閱片提示',
          flowIntro: '系統把標籤、預警和報告文字整理在一起，使閱片人員更快關注需要重點複核的區域。',
          steps: [
            ['接收胸部X線','系統接收胸片及可用的檢查基本資訊。'],
            ['預測與標記','AI分析影像、標記疑似徵象，並顯示異常機率與預警。'],
            ['審核與報告','閱片人員確認或修改結果，並在臨床流程中完成設定好的報告。']
          ],
          highlightHeading: '面向高通量胸部篩檢設計',
          highlightIntro: '快速預測與廣泛病灶涵蓋協助影像團隊兼顧常規體檢和針對性結核篩檢。',
          highlights: [
            ['提示閱片優先級','預警和異常機率協助閱片人員識別可能需要更早複核的檢查。'],
            ['涵蓋整個胸部','二十餘種病灶標籤使產品能力不侷限於單一疾病。'],
            ['適配報告習慣','可設定內容便於科室結合在地篩檢與報告規範調整輸出。']
          ]
        },
        ms: {
          facts: [
            ['20+','Label lesi merentasi semakan X-ray dada'],
            ['≈14 saat','Purata masa ramalan dalam bahan yang dibekalkan'],
            ['Boleh dikonfigurasi','Kandungan laporan boleh disesuaikan']
          ],
          capHeading: 'Triage X-ray dada pantas dengan penemuan jelas dan output fleksibel',
          capIntro: 'Bahan menerangkan sistem yang melabel keabnormalan, menyerlahkan risiko dan menghasilkan laporan untuk pemeriksaan rutin serta saringan TB.',
          caps: [
            ['Liputan abnormaliti luas','Menyokong semakan patah, pneumotoraks, efusi pleura, pembesaran jantung, perubahan aorta dan medan paru-paru abnormal.'],
            ['Imej bertanda dan amaran','Memaparkan lokasi lesi, kebarangkalian abnormaliti dan amaran untuk semakan pantas.'],
            ['Sokongan saringan TB','Menyokong semakan saringan TB berbantukan komputer dalam populasi dan persekitaran yang diterangkan dalam bahan.'],
            ['Pelaporan boleh konfigurasi','Mencipta hasil pemeriksaan daripada ramalan AI dengan kandungan yang boleh disesuaikan.']
          ],
          flowHeading: 'Daripada radiograf dada kepada semakan berkeutamaan dalam beberapa saat',
          flowIntro: 'Label, amaran dan teks laporan disusun supaya pembaca boleh menumpukan perhatian.',
          steps: [
            ['Terima radiograf','X-ray dada memasuki sistem bersama maklumat kajian yang tersedia.'],
            ['Ramal dan label','AI menganalisis imej, menanda penemuan dan memaparkan kebarangkalian serta amaran.'],
            ['Semak dan lapor','Pembaca mengesahkan atau mengedit penemuan dan melengkapkan laporan.']
          ],
          highlightHeading: 'Dibina untuk saringan dada berjumlah tinggi',
          highlightIntro: 'Ramalan pantas dan liputan luas membantu pasukan mengurus pemeriksaan rutin serta saringan TB.',
          highlights: [
            ['Keutamaan perhatian','Amaran membantu mengenal pasti kajian yang mungkin memerlukan semakan lebih awal.'],
            ['Perspektif seluruh dada','Lebih dua puluh label meluaskan sokongan melangkaui satu penyakit.'],
            ['Laporan yang boleh disesuaikan','Kandungan fleksibel membolehkan output sejajar dengan amalan tempatan.']
          ]
        },
        th: {
          facts: [
            ['20+','ป้ายกำกับรอยโรคในการอ่านเอกซเรย์ทรวงอก'],
            ['≈14 วินาที','เวลาทำนายเฉลี่ยตามเอกสาร'],
            ['ปรับได้','เนื้อหารายงานปรับตามขั้นตอนงานได้']
          ],
          capHeading: 'คัดแยกเอกซเรย์ทรวงอกอย่างรวดเร็วด้วยผลที่มองเห็นและรายงานปรับได้',
          capIntro: 'เอกสารอธิบายระบบที่ทำป้ายความผิดปกติ แสดงความเสี่ยง และสร้างรายงานสำหรับการตรวจทั่วไปและคัดกรองวัณโรค',
          caps: [
            ['ครอบคลุมความผิดปกติหลายชนิด','ช่วยตรวจทานกระดูกหัก ลมรั่วในช่องอก น้ำในเยื่อหุ้มปอด หัวใจโต การเปลี่ยนแปลงเอออร์ตา และความผิดปกติในปอด'],
            ['ภาพทำเครื่องหมายและคำเตือน','แสดงตำแหน่งรอยโรค ความน่าจะเป็น และคำเตือนเพื่อการตรวจเร็ว'],
            ['สนับสนุนคัดกรองวัณโรค','ช่วยตรวจทานการคัดกรองวัณโรคด้วยคอมพิวเตอร์ในประชากรและสถานการณ์ที่เอกสารระบุ'],
            ['รายงานปรับได้','สร้างผลตรวจจากการทำนายของ AI และปรับเนื้อหาให้ตรงความต้องการแผนก']
          ],
          flowHeading: 'จากภาพเอกซเรย์สู่การตรวจตามลำดับความสำคัญภายในไม่กี่วินาที',
          flowIntro: 'ระบบจัดป้าย คำเตือน และข้อความรายงาน เพื่อให้ผู้อ่านเน้นบริเวณที่สำคัญ',
          steps: [
            ['รับภาพเอกซเรย์','รับภาพทรวงอกพร้อมข้อมูลการตรวจที่มี'],
            ['ทำนายและทำเครื่องหมาย','AI วิเคราะห์ภาพ ทำเครื่องหมายสิ่งที่สงสัย และแสดงความน่าจะเป็นกับคำเตือน'],
            ['ตรวจทานและรายงาน','ผู้อ่านยืนยันหรือแก้ไขผล แล้วกรอกรายงานตามรูปแบบที่ตั้งไว้']
          ],
          highlightHeading: 'สร้างเพื่อการคัดกรองทรวงอกปริมาณสูง',
          highlightIntro: 'การทำนายรวดเร็วและครอบคลุมรอยโรคช่วยงานตรวจทั่วไปและคัดกรองวัณโรค',
          highlights: [
            ['จัดลำดับการตรวจ','คำเตือนและความน่าจะเป็นช่วยระบุเคสที่ควรตรวจเร็วขึ้น'],
            ['มุมมองทั้งทรวงอก','ป้ายรอยโรคมากกว่ายี่สิบชนิดทำให้ไม่จำกัดอยู่ที่โรคเดียว'],
            ['รายงานยืดหยุ่น','ปรับเนื้อหาให้ตรงกับแนวปฏิบัติการคัดกรองและรายงานในพื้นที่ได้']
          ]
        }
      }
    },

    'thorax-planning': {
      title: 'Thorax Planning',
      categoryKey: 'interventionTreatment',
      summaryKey: 'thoraxDesc',
      images: ['assets/products/visual-thorax-planning.webp'],
      focusImage: 'assets/products/focus-thorax-planning.jpg',
      tags: [{key:'chestCT'},{key:'reconstruction'},{key:'preoperativePlanning'}],
      accent: '#ffd166',
      glow: '#eebd3b36',
      details: {
        en: {
          facts: [
            ['6 structures','Bronchi, arteries, veins, lung segments, body surface and bone'],
            ['3D','Automated segmentation and reconstruction'],
            ['3 procedures','Wedge resection, subsegmentectomy and lobectomy']
          ],
          capHeading: 'Patient-specific lung anatomy for thoracic surgical planning',
          capIntro: 'The supplied presentation describes automated whole-lung reconstruction that makes anatomical relationships and variations easier to inspect before surgery.',
          caps: [
            ['Whole-lung reconstruction','Automatically segments and reconstructs bronchi, pulmonary arteries, pulmonary veins, lobar and segmental lung, body surface and bone.'],
            ['Anatomical variation review','Helps the surgical team identify patient-specific bronchovascular relationships and variations before entering theatre.'],
            ['Procedure planning','Supports wedge resection, subsegmentectomy and lobectomy by visualising the target and surrounding structures.'],
            ['Approach communication','Interactive 3D anatomy helps surgeons discuss the proposed approach, improve spatial understanding and align the team.']
          ],
          flowHeading: 'From chest CT to a patient-specific surgical map',
          flowIntro: 'The workflow transforms routine CT data into a segmented model that can be reviewed during preoperative planning.',
          steps: [
            ['Import the CT study','Thin-slice chest CT data are received for reconstruction of the relevant lung anatomy.'],
            ['Segment and reconstruct','The system separates bronchial, vascular, lung-segment, body-surface and skeletal structures into a 3D model.'],
            ['Plan the procedure','The surgical team reviews variations, target relationships and the intended resection approach before surgery.']
          ],
          highlightHeading: 'A clearer anatomical conversation before surgery',
          highlightIntro: 'The model turns complex two-dimensional slices into an accessible view for planning and multidisciplinary communication.',
          highlights: [
            ['Precise anatomical context','Colour-separated structures help reveal the relationship between the lesion, bronchi, vessels and lung segments.'],
            ['Support across procedures','The same reconstruction approach can assist planning for limited resection through lobectomy.'],
            ['Greater planning confidence','Patient-specific anatomy helps teams anticipate variation and compare possible surgical approaches.']
          ]
        },
        'zh-cn': {
          facts: [
            ['6类结构','支气管、动脉、静脉、肺段、体表与骨骼'],
            ['3D','自动分割与三维重建'],
            ['3类术式','楔形切除、亚段切除与肺叶切除']
          ],
          capHeading: '以患者个体化肺部解剖支持胸外科手术规划',
          capIntro: '资料展示了自动全肺重建，帮助手术团队在术前更直观地查看解剖关系与变异。',
          caps: [
            ['全肺自动重建','自动分割并重建支气管、肺动脉、肺静脉、肺叶与肺段、体表及骨骼结构。'],
            ['解剖变异评估','帮助手术团队在进入手术室前识别患者特异的支气管血管关系与变异。'],
            ['术式规划','通过显示靶区与周围结构，支持楔形切除、亚段切除及肺叶切除方案讨论。'],
            ['手术路径沟通','可交互三维解剖有助于讨论拟定入路、增强空间理解并统一团队认知。']
          ],
          flowHeading: '从胸部CT到患者个体化手术地图',
          flowIntro: '流程将常规CT数据转化为分割后的三维模型，用于术前规划审核。',
          steps: [
            ['导入CT检查','接收薄层胸部CT数据，用于重建相关肺部解剖结构。'],
            ['分割与重建','系统将支气管、血管、肺段、体表和骨骼分别重建为三维模型。'],
            ['规划手术方案','团队在术前查看解剖变异、靶区关系及拟采用的切除路径。']
          ],
          highlightHeading: '让术前解剖沟通更清晰',
          highlightIntro: '模型把复杂的二维切片转化为更易理解的视图，用于规划和多学科沟通。',
          highlights: [
            ['精确解剖环境','不同颜色分离的结构帮助呈现病灶、支气管、血管和肺段之间的关系。'],
            ['覆盖多类术式','同一重建方式可从局部切除延伸到肺叶切除的规划。'],
            ['增强规划信心','个体化解剖有助于提前识别变异并比较不同手术路径。']
          ]
        },
        'zh-tw': {
          facts: [
            ['6類結構','支氣管、動脈、靜脈、肺段、體表與骨骼'],
            ['3D','自動分割與三維重建'],
            ['3類術式','楔形切除、亞段切除與肺葉切除']
          ],
          capHeading: '以患者個體化肺部解剖支援胸外科手術規劃',
          capIntro: '資料展示了自動全肺重建，協助手術團隊在術前更直觀地查看解剖關係與變異。',
          caps: [
            ['全肺自動重建','自動分割並重建支氣管、肺動脈、肺靜脈、肺葉與肺段、體表及骨骼結構。'],
            ['解剖變異評估','協助手術團隊在進入手術室前識別患者特異的支氣管血管關係與變異。'],
            ['術式規劃','透過顯示靶區與周圍結構，支援楔形切除、亞段切除及肺葉切除方案討論。'],
            ['手術路徑溝通','可互動三維解剖有助於討論擬定入路、增強空間理解並統一團隊認知。']
          ],
          flowHeading: '從胸部CT到患者個體化手術地圖',
          flowIntro: '流程將常規CT資料轉化為分割後的三維模型，用於術前規劃審核。',
          steps: [
            ['匯入CT檢查','接收薄層胸部CT資料，用於重建相關肺部解剖結構。'],
            ['分割與重建','系統將支氣管、血管、肺段、體表和骨骼分別重建為三維模型。'],
            ['規劃手術方案','團隊在術前查看解剖變異、靶區關係及擬採用的切除路徑。']
          ],
          highlightHeading: '讓術前解剖溝通更清晰',
          highlightIntro: '模型把複雜的二維切片轉化為更易理解的視圖，用於規劃和多學科溝通。',
          highlights: [
            ['精確解剖環境','不同顏色分離的結構協助呈現病灶、支氣管、血管和肺段之間的關係。'],
            ['涵蓋多類術式','同一重建方式可從局部切除延伸到肺葉切除的規劃。'],
            ['增強規劃信心','個體化解剖有助於提前識別變異並比較不同手術路徑。']
          ]
        },
        ms: {
          facts: [
            ['6 struktur','Bronkus, arteri, vena, segmen paru-paru, permukaan dan tulang'],
            ['3D','Segmentasi dan pembinaan semula automatik'],
            ['3 prosedur','Reseksi baji, subsegmentektomi dan lobektomi']
          ],
          capHeading: 'Anatomi paru-paru khusus pesakit untuk perancangan toraks',
          capIntro: 'Bahan menerangkan pembinaan semula seluruh paru-paru yang memudahkan semakan hubungan dan variasi anatomi sebelum pembedahan.',
          caps: [
            ['Pembinaan semula seluruh paru-paru','Membahagi dan membina semula bronkus, arteri pulmonari, vena, lobus dan segmen, permukaan badan serta tulang.'],
            ['Semakan variasi anatomi','Membantu pasukan mengenal pasti hubungan bronkovaskular khusus pesakit sebelum pembedahan.'],
            ['Perancangan prosedur','Menyokong reseksi baji, subsegmentektomi dan lobektomi melalui visualisasi sasaran serta struktur sekeliling.'],
            ['Komunikasi pendekatan','Anatomi 3D interaktif membantu pasukan membincangkan pendekatan dan memahami ruang.']
          ],
          flowHeading: 'Daripada CT dada kepada peta pembedahan khusus pesakit',
          flowIntro: 'Data CT diubah menjadi model bersegmen untuk semakan perancangan praoperasi.',
          steps: [
            ['Import kajian CT','Data CT dada nipis diterima untuk pembinaan semula anatomi berkaitan.'],
            ['Segmen dan bina semula','Sistem memisahkan struktur bronkus, vaskular, segmen paru-paru, permukaan dan rangka.'],
            ['Rancang prosedur','Pasukan menyemak variasi, hubungan sasaran dan pendekatan reseksi sebelum pembedahan.']
          ],
          highlightHeading: 'Perbincangan anatomi lebih jelas sebelum pembedahan',
          highlightIntro: 'Model menukar irisan dua dimensi kepada pandangan yang mudah difahami.',
          highlights: [
            ['Konteks anatomi tepat','Struktur berwarna menunjukkan hubungan lesi, bronkus, salur dan segmen paru-paru.'],
            ['Sokongan pelbagai prosedur','Kaedah yang sama membantu perancangan daripada reseksi terhad hingga lobektomi.'],
            ['Keyakinan perancangan','Anatomi khusus pesakit membantu menjangka variasi dan membandingkan pendekatan.']
          ]
        },
        th: {
          facts: [
            ['6 โครงสร้าง','หลอดลม หลอดเลือดแดงและดำ กลีบปอด ผิวกาย และกระดูก'],
            ['3D','แบ่งส่วนและสร้างภาพอัตโนมัติ'],
            ['3 หัตถการ','Wedge resection, subsegmentectomy และ lobectomy']
          ],
          capHeading: 'กายวิภาคปอดเฉพาะผู้ป่วยสำหรับการวางแผนผ่าตัดทรวงอก',
          capIntro: 'เอกสารอธิบายการสร้างภาพปอดทั้งหมดอัตโนมัติ เพื่อดูความสัมพันธ์และความแปรผันก่อนผ่าตัดได้ง่ายขึ้น',
          caps: [
            ['สร้างภาพปอดทั้งหมด','แบ่งและสร้างหลอดลม หลอดเลือดปอด กลีบและส่วนปอด ผิวร่างกาย และกระดูกอัตโนมัติ'],
            ['ตรวจความแปรผัน','ช่วยทีมระบุความสัมพันธ์หลอดลมและหลอดเลือดเฉพาะผู้ป่วยก่อนเข้าห้องผ่าตัด'],
            ['วางแผนหัตถการ','แสดงเป้าหมายและโครงสร้างรอบข้างเพื่อช่วยวางแผนการตัดปอดหลายรูปแบบ'],
            ['สื่อสารแนวทางผ่าตัด','กายวิภาค 3 มิติแบบโต้ตอบช่วยพูดคุยแนวทางและสร้างความเข้าใจร่วมกัน']
          ],
          flowHeading: 'จาก CT ทรวงอกสู่แผนที่ผ่าตัดเฉพาะผู้ป่วย',
          flowIntro: 'เปลี่ยนข้อมูล CT เป็นโมเดลแบ่งส่วนสำหรับตรวจทานก่อนผ่าตัด',
          steps: [
            ['นำเข้า CT','รับข้อมูล CT ทรวงอกชั้นบางเพื่อสร้างกายวิภาคที่เกี่ยวข้อง'],
            ['แบ่งและสร้างภาพ','ระบบแยกหลอดลม หลอดเลือด ส่วนปอด ผิวกาย และกระดูกเป็นโมเดล 3 มิติ'],
            ['วางแผนหัตถการ','ทีมตรวจความแปรผัน ความสัมพันธ์เป้าหมาย และเส้นทางการตัดก่อนผ่าตัด']
          ],
          highlightHeading: 'สนทนาเรื่องกายวิภาคก่อนผ่าตัดได้ชัดเจนขึ้น',
          highlightIntro: 'โมเดลเปลี่ยนภาพตัดสองมิติที่ซับซ้อนให้เป็นมุมมองเข้าใจง่ายสำหรับการวางแผน',
          highlights: [
            ['บริบทกายวิภาคแม่นยำ','สีแยกโครงสร้างช่วยแสดงความสัมพันธ์ของรอยโรค หลอดลม หลอดเลือด และส่วนปอด'],
            ['รองรับหลายหัตถการ','วิธีสร้างภาพเดียวช่วยวางแผนได้ตั้งแต่การตัดเฉพาะที่ถึง lobectomy'],
            ['เพิ่มความมั่นใจ','กายวิภาคเฉพาะผู้ป่วยช่วยคาดการณ์ความแปรผันและเปรียบเทียบแนวทาง']
          ]
        }
      }
    },

    'prosthetic-hand': {
      titleKey: 'prostheticHand',
      categoryKey: 'rehabProsthetics',
      summaryKey: 'prostheticDesc',
      images: ['assets/products/visual-prosthetic-hand.webp'],
      focusImage: 'assets/products/focus-prosthetic-hand.jpg',
      tags: [{key:'fda510k'},{key:'fdaClassI'},{key:'qualityReport'}],
      accent: '#ffb45f',
      glow: '#ec8e3038',
      details: {
        en: {
          facts: [
            ['5 fingers','Independent and coordinated movement'],
            ['8-channel','EMG configuration described for the advanced version'],
            ['24 gestures','Preset library described for the standard version']
          ],
          capHeading: 'Intent-driven control for everyday upper-limb function',
          capIntro: 'The manual describes two product configurations that translate neuroelectric and muscle signals into hand movement for users with upper-limb loss.',
          caps: [
            ['Neural and EMG intent recognition','Pattern-recognition algorithms decode residual neuromuscular signals to infer the movement the user intends to perform.'],
            ['Independent finger control','The advanced configuration supports individual finger movement, coordinated multi-finger actions and a broad range of gestures without repeated mode switching.'],
            ['Configurable standard gestures','The standard configuration uses high-precision EMG processing and allows selected gestures from a preset library to be loaded onto the hand.'],
            ['Comfort and mechanical protection','A 3D-scanned socket, two-degree-of-freedom thumb, impact-resistant joints and posture sensing support fit, control and everyday durability.']
          ],
          flowHeading: 'From personalised fitting to intuitive daily control',
          flowIntro: 'Successful use depends on the connection between the residual limb, signal calibration, control training and the mechanical hand.',
          steps: [
            ['Fit the socket and electrodes','The residual limb is scanned for a personalised socket and electrodes are positioned to capture reliable signals.'],
            ['Calibrate movement intent','The user performs or imagines movements while the system learns the signal patterns associated with intended actions.'],
            ['Control and refine','Decoded intent drives the prosthetic hand; practice and ongoing adjustment help improve control in daily activities.']
          ],
          highlightHeading: 'A product family for different control needs',
          highlightIntro: 'The manual separates an advanced intent-recognition version from a standard preset-gesture version while sharing a durable hand platform.',
          highlights: [
            ['Advanced or standard control','Configuration can be aligned with amputation level, available signals and the user’s functional goals.'],
            ['Engineered for daily use','The brochure describes quiet gearing, anti-impact joints, lightweight materials and components tested for repeated opening and closing.'],
            ['Documented product credentials','The supplied manual lists FDA 510(k) clearance, FDA Class I registration and a national rehabilitation-assistive-device quality report.']
          ]
        },
        'zh-cn': {
          facts: [
            ['5指','支持独立运动与协同操作'],
            ['8通道','高端版手册所述的肌电配置'],
            ['24种手势','标准版手册所述的预设手势库']
          ],
          capHeading: '以运动意图驱动日常上肢功能',
          capIntro: '手册介绍了两种产品配置，将神经电与肌肉电信号转化为仿生手动作，服务上肢缺失用户的日常功能需求。',
          caps: [
            ['神经电与肌电意图识别','模式识别算法解码残肢神经肌肉信号，判断用户希望完成的动作。'],
            ['五指独立控制','高端配置支持单指运动、多指协同及更丰富的手势，无需频繁切换模式。'],
            ['可配置标准手势','标准配置采用高精度肌电处理，可从预设手势库中选择常用动作加载到仿生手。'],
            ['舒适度与机械防护','三维扫描接受腔、双自由度拇指、防撞关节和姿态感知共同支持佩戴、控制与日常耐用性。']
          ],
          flowHeading: '从个性化适配到直觉化日常控制',
          flowIntro: '有效使用取决于残肢适配、信号校准、控制训练与机械手之间的完整连接。',
          steps: [
            ['适配接受腔与电极','对残肢进行三维扫描并制作个性化接受腔，同时确定可稳定采集信号的电极位置。'],
            ['校准运动意图','用户执行或想象动作，系统学习不同目标动作对应的信号模式。'],
            ['控制并持续优化','解码后的意图驱动仿生手，通过练习和后续调整逐步提升日常操作能力。']
          ],
          highlightHeading: '面向不同控制需求的产品系列',
          highlightIntro: '手册将意图识别高端版与预设手势标准版区分开来，同时共用耐用的仿生手平台。',
          highlights: [
            ['高端或标准控制','可根据截肢部位、可用信号及用户功能目标选择配置。'],
            ['面向日常使用设计','手册描述了低噪声传动、防撞关节、轻量材料及经反复开合测试的关键部件。'],
            ['具备产品资质资料','所提供手册列有FDA 510(k)许可、FDA I类产品注册和国家康复辅具质检报告。']
          ]
        },
        'zh-tw': {
          facts: [
            ['5指','支援獨立運動與協同操作'],
            ['8通道','高階版手冊所述的肌電配置'],
            ['24種手勢','標準版手冊所述的預設手勢庫']
          ],
          capHeading: '以運動意圖驅動日常上肢功能',
          capIntro: '手冊介紹了兩種產品設定，將神經電與肌肉電訊號轉化為仿生手動作，服務上肢缺失使用者的日常功能需求。',
          caps: [
            ['神經電與肌電意圖識別','模式識別演算法解碼殘肢神經肌肉訊號，判斷使用者希望完成的動作。'],
            ['五指獨立控制','高階設定支援單指運動、多指協同及更豐富的手勢，無需頻繁切換模式。'],
            ['可設定標準手勢','標準設定採用高精度肌電處理，可從預設手勢庫中選擇常用動作載入仿生手。'],
            ['舒適度與機械防護','三維掃描接受腔、雙自由度拇指、防撞關節和姿態感知共同支援佩戴、控制與日常耐用性。']
          ],
          flowHeading: '從個人化適配到直覺化日常控制',
          flowIntro: '有效使用取決於殘肢適配、訊號校準、控制訓練與機械手之間的完整連接。',
          steps: [
            ['適配接受腔與電極','對殘肢進行三維掃描並製作個人化接受腔，同時確定可穩定採集訊號的電極位置。'],
            ['校準運動意圖','使用者執行或想像動作，系統學習不同目標動作對應的訊號模式。'],
            ['控制並持續最佳化','解碼後的意圖驅動仿生手，透過練習和後續調整逐步提升日常操作能力。']
          ],
          highlightHeading: '面向不同控制需求的產品系列',
          highlightIntro: '手冊將意圖識別高階版與預設手勢標準版區分開來，同時共用耐用的仿生手平台。',
          highlights: [
            ['高階或標準控制','可根據截肢部位、可用訊號及使用者功能目標選擇設定。'],
            ['面向日常使用設計','手冊描述了低噪聲傳動、防撞關節、輕量材料及經反覆開合測試的關鍵零件。'],
            ['具備產品資格資料','所提供手冊列有FDA 510(k)許可、FDA I類產品註冊和國家康復輔具質檢報告。']
          ]
        },
        ms: {
          facts: [
            ['5 jari','Pergerakan bebas dan terselaras'],
            ['8 saluran','Konfigurasi EMG untuk versi lanjutan'],
            ['24 gerak isyarat','Pustaka pratetap untuk versi standard']
          ],
          capHeading: 'Kawalan berasaskan niat untuk fungsi anggota atas harian',
          capIntro: 'Manual menerangkan dua konfigurasi yang menterjemah isyarat saraf dan otot kepada pergerakan tangan.',
          caps: [
            ['Pengecaman niat neural dan EMG','Algoritma corak menyahkod isyarat neuromuskular baki untuk mengesan gerakan yang dimaksudkan.'],
            ['Kawalan jari bebas','Versi lanjutan menyokong pergerakan setiap jari, tindakan terselaras dan pelbagai gerak isyarat.'],
            ['Gerak isyarat standard boleh konfigurasi','Versi standard memproses EMG berketepatan tinggi dan memuatkan gerak isyarat terpilih daripada pustaka.'],
            ['Keselesaan dan perlindungan mekanikal','Soket imbasan 3D, ibu jari dua darjah kebebasan, sendi tahan hentakan dan penderiaan postur menyokong penggunaan harian.']
          ],
          flowHeading: 'Daripada pemasangan peribadi kepada kawalan harian intuitif',
          flowIntro: 'Penggunaan berkesan bergantung pada soket, penentukuran isyarat, latihan kawalan dan tangan mekanikal.',
          steps: [
            ['Pasang soket dan elektrod','Anggota sisa diimbas untuk soket peribadi dan elektrod diletakkan bagi menangkap isyarat.'],
            ['Kalibrasi niat pergerakan','Pengguna melakukan atau membayangkan gerakan sementara sistem mempelajari corak isyarat.'],
            ['Kawal dan perhalusi','Niat yang dinyahkod memacu tangan; latihan dan pelarasan membantu meningkatkan kawalan.']
          ],
          highlightHeading: 'Keluarga produk untuk keperluan kawalan berbeza',
          highlightIntro: 'Manual membezakan versi pengecaman niat lanjutan dan versi gerak isyarat standard.',
          highlights: [
            ['Kawalan lanjutan atau standard','Konfigurasi boleh dipadankan dengan tahap amputasi, isyarat dan matlamat fungsi.'],
            ['Direka untuk kegunaan harian','Manual menerangkan gear senyap, sendi tahan hentakan, bahan ringan dan komponen tahan ulang guna.'],
            ['Kelayakan produk didokumenkan','Manual menyenaraikan pelepasan FDA 510(k), pendaftaran FDA Kelas I dan laporan kualiti kebangsaan.']
          ]
        },
        th: {
          facts: [
            ['5 นิ้ว','เคลื่อนไหวอิสระและประสานกัน'],
            ['8 ช่อง','การกำหนดค่า EMG สำหรับรุ่นขั้นสูง'],
            ['24 ท่าทาง','คลังท่าทางสำเร็จรูปของรุ่นมาตรฐาน']
          ],
          capHeading: 'ควบคุมด้วยเจตนาการเคลื่อนไหวเพื่อการใช้ชีวิตประจำวัน',
          capIntro: 'คู่มืออธิบายสองรุ่นที่แปลงสัญญาณประสาทและกล้ามเนื้อเป็นการเคลื่อนไหวของมือสำหรับผู้สูญเสียแขน',
          caps: [
            ['รู้จำเจตนาจากประสาทและ EMG','อัลกอริทึมถอดรหัสสัญญาณประสาทกล้ามเนื้อที่เหลือ เพื่อคาดการณ์ท่าที่ผู้ใช้ต้องการ'],
            ['ควบคุมนิ้วแยกกัน','รุ่นขั้นสูงรองรับการเคลื่อนไหวแต่ละนิ้ว การประสานหลายนิ้ว และท่าทางหลากหลาย'],
            ['ท่ามาตรฐานปรับได้','รุ่นมาตรฐานประมวลผล EMG ความละเอียดสูง และเลือกท่าจากคลังสำเร็จรูปมาใช้กับมือ'],
            ['ความสบายและการป้องกัน','เบ้ารับสแกน 3 มิติ นิ้วหัวแม่มือสององศาอิสระ ข้อต่อกันกระแทก และเซ็นเซอร์ท่าทางรองรับการใช้ประจำวัน']
          ],
          flowHeading: 'จากการปรับเฉพาะบุคคลสู่การควบคุมประจำวันอย่างเป็นธรรมชาติ',
          flowIntro: 'การใช้งานที่ดีขึ้นอยู่กับเบ้ารับ การปรับสัญญาณ การฝึกควบคุม และมือกล',
          steps: [
            ['ติดตั้งเบ้ารับและขั้วไฟฟ้า','สแกนแขนที่เหลือเพื่อสร้างเบ้ารับเฉพาะ และวางขั้วไฟฟ้าสำหรับรับสัญญาณ'],
            ['ปรับเทียบเจตนา','ผู้ใช้ทำหรือจินตนาการท่าทาง ขณะที่ระบบเรียนรู้รูปแบบสัญญาณ'],
            ['ควบคุมและปรับปรุง','เจตนาที่ถอดรหัสขับมือกล การฝึกและการปรับช่วยเพิ่มความคล่องในการใช้ชีวิต']
          ],
          highlightHeading: 'ผลิตภัณฑ์หลายรุ่นสำหรับความต้องการควบคุมต่างกัน',
          highlightIntro: 'คู่มือแยกรุ่นรู้จำเจตนาขั้นสูงออกจากรุ่นท่าทางสำเร็จรูปบนแพลตฟอร์มมือที่ทนทาน',
          highlights: [
            ['ควบคุมขั้นสูงหรือมาตรฐาน','เลือกให้เหมาะกับระดับการตัดแขน สัญญาณที่ใช้ได้ และเป้าหมายการทำงาน'],
            ['ออกแบบเพื่อใช้ทุกวัน','คู่มือระบุชุดเกียร์เงียบ ข้อต่อกันกระแทก วัสดุน้ำหนักเบา และชิ้นส่วนทนต่อการเปิดปิดซ้ำ'],
            ['มีเอกสารคุณสมบัติผลิตภัณฑ์','คู่มือระบุ FDA 510(k), การขึ้นทะเบียน FDA Class I และรายงานคุณภาพอุปกรณ์ฟื้นฟูระดับชาติ']
          ]
        }
      }
    }
  };

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  })[character]);

  function mainText(lang,key){
    return copy[lang]?.[key] || copy.en[key] || key;
  }

  function uiText(lang,key){
    return uiCopy[lang]?.[key] || uiCopy.en[key] || key;
  }

  function renderCards(target,items,renderer){
    document.querySelector(target).innerHTML=items.map(renderer).join('');
  }

  function renderProduct(requestedLanguage){
    const lang=resolveLanguage(requestedLanguage || document.documentElement.lang);
    const productId=new URLSearchParams(window.location.search).get('product');
    const product=productCatalog[productId];
    if(!product){
      window.location.replace('ai-healthcare.html');
      return;
    }

    const detail=product.details[lang] || product.details.en;
    document.querySelectorAll('[data-product-ui]').forEach(element=>{
      element.textContent=uiText(lang,element.dataset.productUi);
    });

    const title=product.title || mainText(lang,product.titleKey);
    const summary=mainText(lang,product.summaryKey);
    document.querySelector('#product-title').textContent=title;
    document.querySelector('#product-summary').textContent=summary;
    document.querySelector('#product-category').textContent=mainText(lang,product.categoryKey);

    document.body.style.setProperty('--product-accent',product.accent);
    document.body.style.setProperty('--product-accent-glow',product.glow);

    const alt=uiText(lang,'imageAlt').replace('{product}',title);
    const gallery=document.querySelector('#product-gallery');
    gallery.classList.toggle('dual',product.images.length>1);
    gallery.innerHTML=product.images.map(image=>`<figure><img src="${escapeHtml(image)}" alt="${escapeHtml(alt)}"></figure>`).join('');

    renderCards('#product-tags',product.tags,tag=>{
      const label=tag.key?mainText(lang,tag.key):tag.text;
      return `<span>${escapeHtml(label)}</span>`;
    });

    renderCards('#product-facts',detail.facts,([value,label])=>`
      <article><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></article>
    `);

    document.querySelector('#capability-heading').textContent=detail.capHeading;
    document.querySelector('#capability-intro').textContent=detail.capIntro;
    renderCards('#capability-grid',detail.caps,([heading,text],index)=>`
      <article>
        <div class="capability-visual capability-visual-${index}" role="img" aria-label="${escapeHtml(heading)}">
          <img src="${escapeHtml(product.focusImage)}" alt="" loading="lazy">
        </div>
        <div class="capability-copy">
          <b>${String(index+1).padStart(2,'0')}</b>
          <h3>${escapeHtml(heading)}</h3>
          <p>${escapeHtml(text)}</p>
        </div>
      </article>
    `);

    document.querySelector('#workflow-heading').textContent=detail.flowHeading;
    document.querySelector('#workflow-intro').textContent=detail.flowIntro;
    renderCards('#workflow-flow',detail.steps,([heading,text],index)=>`
      <article>
        <b>${String(index+1).padStart(2,'0')}</b>
        <span class="workflow-symbol ${index===1?'process':index===2?'review':''}" aria-hidden="true"></span>
        <h3>${escapeHtml(heading)}</h3>
        <p>${escapeHtml(text)}</p>
      </article>
    `);

    document.querySelector('#highlight-heading').textContent=detail.highlightHeading;
    document.querySelector('#highlight-intro').textContent=detail.highlightIntro;
    renderCards('#highlight-grid',detail.highlights,([heading,text],index)=>`
      <article>
        <span>${String(index+1).padStart(2,'0')}</span>
        <h3>${escapeHtml(heading)}</h3>
        <p>${escapeHtml(text)}</p>
      </article>
    `);

    const enquiryUrl=`contact.html?product=${encodeURIComponent(title)}#enquiry`;
    document.querySelector('#product-enquiry').href=enquiryUrl;
    document.querySelector('#product-cta').href=enquiryUrl;
    document.title=`${title} — SCOVION`;
    document.querySelector('meta[name="description"]').content=summary;
    document.querySelector('#product-detail').hidden=false;
  }

  document.addEventListener('scovion:languagechange',event=>renderProduct(event.detail.lang));
  document.addEventListener('DOMContentLoaded',()=>renderProduct(document.documentElement.lang||'en'));
})();
