(() => {
  const uiCopy = {
    en: {
      backToPortfolio: '← Back to AI Healthcare',
      discussProduct: 'Discuss this product',
      exploreCapabilities: 'Explore capabilities',
      visualNotice: 'Image for reference only.',
      capabilityEyebrow: 'Clinical focus',
      secondaryVisualEyebrow: 'Analysis view',
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
      secondaryVisualEyebrow: '分析视图',
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
      secondaryVisualEyebrow: '分析視圖',
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
      secondaryVisualEyebrow: 'Paparan analisis',
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
      secondaryVisualEyebrow: 'มุมมองการวิเคราะห์',
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
      tags: [{key:'breastXray'},{key:'ceMarked'},{key:'nmpaApproved'},{text:'BI-RADS'}],
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
          capIntro: 'An integrated workflow connects lesion detection, breast composition, risk assessment and reporting.',
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
          highlightIntro: 'Dense-breast analysis, standard terminology and a streamlined reading workflow help imaging teams manage growing demand.',
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
          capIntro: '一体化乳腺X线辅助诊断流程贯通病灶检出、腺体构成、风险评估与报告生成。',
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
          highlightIntro: '致密型乳腺分析、标准术语与高效阅片流程，帮助影像团队应对持续增长的阅片需求。',
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
          capIntro: '一體化乳腺X線輔助診斷流程貫通病灶偵測、腺體構成、風險評估與報告產生。',
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
          highlightIntro: '緻密型乳腺分析、標準術語與高效閱片流程，協助影像團隊因應持續成長的閱片需求。',
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
          capIntro: 'Aliran bersepadu menghubungkan pengesanan lesi, komposisi payudara, penilaian risiko dan pelaporan.',
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
          highlightIntro: 'Analisis payudara padat, istilah standard dan aliran bacaan yang cekap membantu pasukan pengimejan mengurus permintaan.',
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
          capIntro: 'กระบวนการแบบบูรณาการเชื่อมการตรวจหารอยโรค องค์ประกอบเต้านม การประเมินความเสี่ยง และการออกรายงาน',
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
          highlightIntro: 'การวิเคราะห์เต้านมหนาแน่น คำศัพท์มาตรฐาน และขั้นตอนอ่านภาพที่มีประสิทธิภาพ ช่วยรองรับปริมาณงานที่เพิ่มขึ้น',
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
      tags: [{key:'nmpaApproved'},{key:'coronaryCTA'},{text:'CT-FFR'},{key:'calciumScoring'}],
      accent: '#ff9d7d',
      glow: '#ef6a4538',
      details: {
        en: {
          facts: [
            ['≤3 min','Automated reconstruction and selected analyses'],
            ['1.5 mm','Small coronary branch segmentation'],
            ['3-in-1','Morphology, functional assessment and structured output']
          ],
          capHeading: 'Coronary CTA from automatic reconstruction to functional assessment',
          capIntro: 'A zero-click pathway turns CT images into coronary anatomy, plaque and stenosis analysis, functional indicators, films and reports.',
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
            ['≤3分钟','自动重建及部分分析用时'],
            ['1.5 mm','可分割的细小冠脉分支尺度'],
            ['三合一','形态学、功能学与结构化输出']
          ],
          capHeading: '从冠脉CTA自动重建延伸到功能学评估',
          capIntro: '零键后处理链路将CT影像转化为冠脉解剖、斑块与狭窄分析、功能指标、胶片和报告。',
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
            ['≤3分鐘','自動重建及部分分析用時'],
            ['1.5 mm','可分割的細小冠脈分支尺度'],
            ['三合一','形態學、功能學與結構化輸出']
          ],
          capHeading: '從冠脈CTA自動重建延伸到功能學評估',
          capIntro: '零鍵後處理鏈路將CT影像轉化為冠脈解剖、斑塊與狹窄分析、功能指標、膠片和報告。',
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
            ['≤3 min','Pembinaan semula automatik dan analisis terpilih'],
            ['1.5 mm','Segmentasi cabang koronari kecil'],
            ['3-dalam-1','Morfologi, fungsi dan output berstruktur']
          ],
          capHeading: 'Daripada pembinaan semula CTA koronari kepada penilaian fungsi',
          capIntro: 'Laluan tanpa klik menukar imej CT kepada anatomi koronari, analisis plak dan stenosis, petunjuk fungsi, filem dan laporan.',
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
            ['≤3 นาที','การสร้างภาพอัตโนมัติและการวิเคราะห์บางส่วน'],
            ['1.5 มม.','การแบ่งส่วนกิ่งหลอดเลือดหัวใจขนาดเล็ก'],
            ['3 ใน 1','สัณฐานวิทยา การทำงาน และผลลัพธ์แบบมีโครงสร้าง']
          ],
          capHeading: 'จากการสร้างภาพ Coronary CTA อัตโนมัติสู่การประเมินการทำงาน',
          capIntro: 'ขั้นตอนแบบไม่ต้องคลิกเปลี่ยนภาพ CT เป็นกายวิภาคหลอดเลือดหัวใจ การวิเคราะห์คราบพลัคและการตีบ ตัวชี้วัดการทำงาน ฟิล์ม และรายงาน',
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
      tags: [{key:'nmpaApproved'},{key:'headNeckCTA'},{key:'aneurysmDetection'},{key:'perfusionAnalysis'}],
      accent: '#b7a6ff',
      glow: '#725ae83b',
      details: {
        en: {
          facts: [
            ['NCCT · CTA · CTP','One pathway across key stroke imaging sequences'],
            ['≈3 min','Automated head-and-neck CTA reconstruction'],
            ['<3 mm','Micro-aneurysm analysis capability']
          ],
          capHeading: 'A one-stop pathway for stroke and head-and-neck vascular imaging',
          capIntro: 'NCCT, CTA and CTP come together to support rapid lesion review, vascular assessment and perfusion analysis.',
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
            ['约3分钟','头颈CTA自动重建时间'],
            ['<3 mm','微小动脉瘤分析能力']
          ],
          capHeading: '面向脑卒中与头颈血管影像的一站式流程',
          capIntro: 'NCCT、CTA与CTP协同支持快速病灶复核、血管评估和灌注分析。',
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
            ['約3分鐘','頭頸CTA自動重建時間'],
            ['<3 mm','微小動脈瘤分析能力']
          ],
          capHeading: '面向腦卒中與頭頸血管影像的一站式流程',
          capIntro: 'NCCT、CTA與CTP協同支援快速病灶複核、血管評估和灌注分析。',
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
            ['≈3 min','Pembinaan semula CTA kepala dan leher automatik'],
            ['<3 mm','Keupayaan analisis mikroaneurisme']
          ],
          capHeading: 'Laluan sehenti untuk strok dan pengimejan vaskular kepala serta leher',
          capIntro: 'NCCT, CTA dan CTP digabungkan untuk menyokong semakan lesi, penilaian vaskular dan analisis perfusi.',
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
            ['≈3 นาที','การสร้างภาพ CTA ศีรษะและคออัตโนมัติ'],
            ['<3 มม.','ความสามารถวิเคราะห์หลอดเลือดโป่งพองขนาดเล็ก']
          ],
          capHeading: 'ขั้นตอนแบบครบวงจรสำหรับโรคหลอดเลือดสมองและหลอดเลือดศีรษะคอ',
          capIntro: 'NCCT, CTA และ CTP ทำงานร่วมกันเพื่อสนับสนุนการตรวจรอยโรค ประเมินหลอดเลือด และวิเคราะห์การไหลเวียน',
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
      images: ['assets/products/visual-bone-age-device-v2.jpg'],
      secondaryImage: 'assets/products/visual-bone-age-analysis.webp',
      secondaryHeadings: {
        en: 'AI bone-age assessment, presented at full scale',
        'zh-cn': '完整呈现AI骨龄评估视图',
        'zh-tw': '完整呈現AI骨齡評估視圖',
        ms: 'Penilaian umur tulang AI dalam paparan penuh',
        th: 'มุมมองการประเมินอายุกระดูกด้วย AI แบบเต็มภาพ'
      },
      focusImage: 'assets/products/focus-bone-age-analyser.jpg',
      tags: [{key:'nmpaApproved'}],
      accent: '#7ee7ff',
      glow: '#27bfe53d',
      details: {
        en: {
          facts: [
            ['<1 s','Exposure time'],
            ['80 cm','Source-to-image distance for consistent hand imaging'],
            ['0.25 m²','Compact equipment footprint']
          ],
          capHeading: 'Imaging, bone-age assessment and growth follow-up in one device',
          capIntro: 'An integrated system connects controlled image acquisition and radiation protection with AI assessment and reporting.',
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
            ['Simplified site requirements','A 220 V, movable system with full shielding can operate without a dedicated shielded room under applicable conditions.'],
            ['Repeatable assessment','Standardised acquisition and automated grading are intended to improve consistency across readers and follow-up visits.'],
            ['Clinical and research continuity','Longitudinal records support screening, diagnosis, treatment follow-up and structured research data collection.']
          ]
        },
        'zh-cn': {
          facts: [
            ['<1秒','曝光时间'],
            ['80 cm','保持手部成像一致性的管片距'],
            ['0.25 m²','设备占地面积']
          ],
          capHeading: '将拍摄、骨龄评估与生长随访整合在一台设备中',
          capIntro: '软硬件一体化系统将受控图像采集、辐射防护、AI骨龄评估与报告流程连为一体。',
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
            ['简化场地条件','设备使用220V电源、可移动并采用全屏蔽设计，在满足适用条件时无需专用屏蔽机房。'],
            ['提升评估一致性','标准化拍摄与自动骨骺分级有助于减少不同阅片人员和多次随访之间的差异。'],
            ['连接临床与科研','纵向记录可支持筛查、诊断、治疗随访以及规范化科研数据采集。']
          ]
        },
        'zh-tw': {
          facts: [
            ['<1秒','曝光時間'],
            ['80 cm','保持手部成像一致性的管片距'],
            ['0.25 m²','設備占地面積']
          ],
          capHeading: '將拍攝、骨齡評估與生長追蹤整合在一台設備中',
          capIntro: '軟硬體一體化系統將受控影像採集、輻射防護、AI骨齡評估與報告流程連為一體。',
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
            ['簡化場地條件','設備使用220V電源、可移動並採用全屏蔽設計，在符合適用條件時無需專用屏蔽機房。'],
            ['提升評估一致性','標準化拍攝與自動骨骺分級有助於減少不同閱片人員和多次追蹤之間的差異。'],
            ['連接臨床與科研','縱向紀錄可支援篩檢、診斷、治療追蹤以及規範化科研資料採集。']
          ]
        },
        ms: {
          facts: [
            ['<1 saat','Masa dedahan'],
            ['80 cm','Jarak sumber-ke-imej untuk pengimejan tangan konsisten'],
            ['0.25 m²','Jejak peralatan yang padat']
          ],
          capHeading: 'Pengimejan, penilaian umur tulang dan susulan pertumbuhan dalam satu peranti',
          capIntro: 'Sistem bersepadu menghubungkan pemerolehan imej terkawal dan perlindungan sinaran dengan penilaian AI serta pelaporan.',
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
            ['<1 วินาที','เวลาเอกซเรย์'],
            ['80 ซม.','ระยะต้นกำเนิดถึงภาพเพื่อความสม่ำเสมอ'],
            ['0.25 ตร.ม.','พื้นที่ติดตั้งขนาดกะทัดรัด']
          ],
          capHeading: 'ถ่ายภาพ ประเมินอายุกระดูก และติดตามการเจริญเติบโตในอุปกรณ์เดียว',
          capIntro: 'ระบบรวมเชื่อมการถ่ายภาพแบบควบคุมและการป้องกันรังสีเข้ากับการประเมินด้วย AI และการออกรายงาน',
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
            ['เงื่อนไขติดตั้งง่ายขึ้น','ระบบใช้ไฟ 220 V เคลื่อนย้ายได้ มีเกราะป้องกันเต็มรูปแบบ และไม่ต้องใช้ห้องเฉพาะเมื่อเป็นไปตามเงื่อนไข'],
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
      images: ['assets/products/visual-bone-density-device.webp'],
      secondaryImage: 'assets/products/visual-bone-density-analysis.webp',
      secondaryHeadings: {
        en: 'Automated bone-density analysis, shown in detail',
        'zh-cn': '大图展示自动骨密度分析',
        'zh-tw': '大圖展示自動骨密度分析',
        ms: 'Analisis ketumpatan tulang automatik secara terperinci',
        th: 'การวิเคราะห์ความหนาแน่นกระดูกอัตโนมัติแบบละเอียด'
      },
      focusImage: 'assets/products/focus-bone-density-analyser.jpg',
      tags: [{key:'boneDensityMeasurement'},{key:'exemptionFiling'},{key:'structuredReport'}],
      accent: '#85d9ff',
      glow: '#4698ed36',
      details: {
        en: {
          facts: [
            ['≈2 s','Image acquisition time'],
            ['≥2 LP/mm','Detector resolution'],
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
          highlightIntro: 'The shielded, movable system can work independently or connect to a hospital network.',
          highlights: [
            ['Space-efficient operation','The approximately 507 × 320 × 490 mm unit occupies about 0.2 m² and is designed for desktop use.'],
            ['Wireless clinical control','Tablet or computer operation supports remote positioning, real-time viewing and convenient clinician-patient interaction.'],
            ['Standalone or networked','The device can generate reports locally or send results through the hospital LAN for department-wide access.']
          ]
        },
        'zh-cn': {
          facts: [
            ['约2秒','图像采集时间'],
            ['≥2 LP/mm','探测器分辨率'],
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
          highlightIntro: '全屏蔽、可移动的设备既可独立工作，也可连接医院局域网。',
          highlights: [
            ['节省空间','设备约507 × 320 × 490 mm，占地约0.2 m²，适合桌面放置。'],
            ['无线临床操作','平板或电脑操作支持远台摆位、实时观察及更方便的医患互动。'],
            ['独立或联网部署','设备可本地生成报告，也可将结果推送至医院局域网供各科室调阅。']
          ]
        },
        'zh-tw': {
          facts: [
            ['約2秒','影像採集時間'],
            ['≥2 LP/mm','探測器解析度'],
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
          highlightIntro: '全屏蔽、可移動的設備既可獨立工作，也可連接醫院區域網路。',
          highlights: [
            ['節省空間','設備約507 × 320 × 490 mm，占地約0.2 m²，適合桌面放置。'],
            ['無線臨床操作','平板或電腦操作支援遠端擺位、即時觀察及更方便的醫病互動。'],
            ['獨立或聯網部署','設備可在本地產生報告，也可將結果推送至醫院區域網路供各科室調閱。']
          ]
        },
        ms: {
          facts: [
            ['≈2 saat','Masa pemerolehan imej'],
            ['≥2 LP/mm','Resolusi pengesan'],
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
          highlightIntro: 'Sistem terlindung dan boleh bergerak boleh berfungsi sendiri atau melalui rangkaian hospital.',
          highlights: [
            ['Operasi jimat ruang','Unit kira-kira 507 × 320 × 490 mm menggunakan sekitar 0.2 m² dan sesuai di atas meja.'],
            ['Kawalan klinikal tanpa wayar','Tablet atau komputer menyokong kedudukan jauh dan paparan masa nyata.'],
            ['Kendiri atau berangkaian','Laporan boleh dijana setempat atau dihantar melalui LAN hospital.']
          ]
        },
        th: {
          facts: [
            ['≈2 วินาที','เวลารับภาพ'],
            ['≥2 LP/mm','ความละเอียดตัวตรวจจับ'],
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
          highlightIntro: 'ระบบมีเกราะป้องกันและเคลื่อนย้ายได้ สามารถทำงานเดี่ยวหรือผ่านเครือข่ายโรงพยาบาล',
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
            ['4 mm','Minimum supported nodule size'],
            ['4 types','Pure GGN, solid, mixed GGN and suspected tumour'],
            ['Big 3','Lung nodules, coronary calcium and COPD indicators']
          ],
          capHeading: 'Beyond nodule detection: a quantitative view of whole-lung health',
          capIntro: 'Lung-cancer screening, opportunistic findings, longitudinal comparison and structured reporting come together in one solution.',
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
            ['4 mm','支持的最小结节检出尺度'],
            ['4类','纯磨玻璃、实性、混合磨玻璃与疑似肿瘤'],
            ['三大疾病','肺结节、冠脉钙化与COPD相关指标']
          ],
          capHeading: '不止检出结节，也提供全肺健康的定量视图',
          capIntro: '产品将肺癌筛查、机会性发现、纵向比较和结构化报告整合在同一解决方案中。',
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
            ['4 mm','支援的最小結節偵測尺度'],
            ['4類','純磨玻璃、實性、混合磨玻璃與疑似腫瘤'],
            ['三大疾病','肺結節、冠脈鈣化與COPD相關指標']
          ],
          capHeading: '不只偵測結節，也提供全肺健康的定量視圖',
          capIntro: '產品將肺癌篩檢、機會性發現、縱向比較和結構化報告整合在同一解決方案中。',
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
            ['4 mm','Saiz nodul minimum yang disokong'],
            ['4 jenis','GGN tulen, pepejal, GGN campuran dan tumor disyaki'],
            ['Big 3','Nodul paru-paru, kalsium koronari dan petunjuk COPD']
          ],
          capHeading: 'Lebih daripada pengesanan nodul: pandangan kuantitatif seluruh paru-paru',
          capIntro: 'Saringan kanser paru-paru, penemuan oportunistik, perbandingan longitudinal dan laporan berstruktur digabungkan dalam satu penyelesaian.',
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
            ['4 มม.','ขนาดก้อนต่ำสุดที่รองรับ'],
            ['4 ชนิด','Pure GGN, solid, mixed GGN และเนื้องอกที่สงสัย'],
            ['Big 3','ก้อนปอด แคลเซียมหลอดเลือดหัวใจ และตัวชี้วัด COPD']
          ],
          capHeading: 'มากกว่าการตรวจหาก้อน ด้วยภาพเชิงปริมาณของปอดทั้งหมด',
          capIntro: 'การคัดกรองมะเร็งปอด การค้นพบโดยบังเอิญ การเปรียบเทียบระยะยาว และรายงานแบบมีโครงสร้าง รวมอยู่ในโซลูชันเดียว',
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
            ['≈14 s','Average prediction time'],
            ['Configurable','Report content can be adapted to the workflow']
          ],
          capHeading: 'Fast chest X-ray triage with visible findings and configurable output',
          capIntro: 'The system labels abnormalities, highlights risk and produces report content across routine examination and tuberculosis screening.',
          caps: [
            ['Broad abnormality coverage','Supports review of findings including fracture, pneumothorax, pleural effusion, cardiac enlargement, aortic change and abnormal lung fields.'],
            ['Marked images and warnings','Displays lesion location, abnormality probability and conspicuous warnings on the study for rapid review.'],
            ['Tuberculosis screening support','Supports computer-assisted TB screening review in community and healthcare settings for indicated populations.'],
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
            ['约14秒','平均预测时间'],
            ['可配置','报告内容可按工作流程调整']
          ],
          capHeading: '以可视化征象与可配置输出支持快速胸片分诊',
          capIntro: '覆盖常规体检与结核筛查的工作流程可标记异常、提示风险并自动生成报告内容。',
          caps: [
            ['广泛异常覆盖','支持复核骨折、气胸、胸腔积液、心影增大、主动脉改变及肺野异常等多类征象。'],
            ['病灶标记与预警','在影像上呈现病灶位置、异常概率和醒目提示，便于快速阅片。'],
            ['结核病筛查支持','面向适用人群，为社区及医疗机构的计算机辅助结核筛查提供支持。'],
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
            ['約14秒','平均預測時間'],
            ['可設定','報告內容可按工作流程調整']
          ],
          capHeading: '以視覺化徵象與可設定輸出支援快速胸片分診',
          capIntro: '涵蓋常規體檢與結核篩檢的工作流程可標記異常、提示風險並自動產生報告內容。',
          caps: [
            ['廣泛異常涵蓋','支援複核骨折、氣胸、胸腔積液、心影增大、主動脈改變及肺野異常等多類徵象。'],
            ['病灶標記與預警','在影像上呈現病灶位置、異常機率和醒目提示，便於快速閱片。'],
            ['結核病篩檢支援','面向適用人群，為社區及醫療機構的電腦輔助結核篩檢提供支援。'],
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
            ['≈14 saat','Purata masa ramalan'],
            ['Boleh dikonfigurasi','Kandungan laporan boleh disesuaikan']
          ],
          capHeading: 'Triage X-ray dada pantas dengan penemuan jelas dan output fleksibel',
          capIntro: 'Sistem melabel keabnormalan, menyerlahkan risiko dan menghasilkan laporan untuk pemeriksaan rutin serta saringan TB.',
          caps: [
            ['Liputan abnormaliti luas','Menyokong semakan patah, pneumotoraks, efusi pleura, pembesaran jantung, perubahan aorta dan medan paru-paru abnormal.'],
            ['Imej bertanda dan amaran','Memaparkan lokasi lesi, kebarangkalian abnormaliti dan amaran untuk semakan pantas.'],
            ['Sokongan saringan TB','Menyokong semakan saringan TB berbantukan komputer dalam komuniti dan kemudahan kesihatan bagi populasi yang sesuai.'],
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
            ['≈14 วินาที','เวลาทำนายเฉลี่ย'],
            ['ปรับได้','เนื้อหารายงานปรับตามขั้นตอนงานได้']
          ],
          capHeading: 'คัดแยกเอกซเรย์ทรวงอกอย่างรวดเร็วด้วยผลที่มองเห็นและรายงานปรับได้',
          capIntro: 'ระบบทำป้ายความผิดปกติ แสดงความเสี่ยง และสร้างรายงานสำหรับการตรวจทั่วไปและคัดกรองวัณโรค',
          caps: [
            ['ครอบคลุมความผิดปกติหลายชนิด','ช่วยตรวจทานกระดูกหัก ลมรั่วในช่องอก น้ำในเยื่อหุ้มปอด หัวใจโต การเปลี่ยนแปลงเอออร์ตา และความผิดปกติในปอด'],
            ['ภาพทำเครื่องหมายและคำเตือน','แสดงตำแหน่งรอยโรค ความน่าจะเป็น และคำเตือนเพื่อการตรวจเร็ว'],
            ['สนับสนุนคัดกรองวัณโรค','ช่วยตรวจทานการคัดกรองวัณโรคด้วยคอมพิวเตอร์ในชุมชนและสถานพยาบาลสำหรับกลุ่มประชากรที่เหมาะสม'],
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
      summaries: {
        en: 'Automatically reconstructs lung lobes, segments, subsegments, vessels and bronchi from contrast or non-contrast chest CT to support lesion positioning and resection-margin planning.',
        'zh-cn': '可根据增强或非增强胸部CT自动重建肺叶、肺段、亚段、血管与支气管，支持病灶定位和切缘规划。',
        'zh-tw': '可根據增強或非增強胸部CT自動重建肺葉、肺段、亞段、血管與支氣管，支援病灶定位和切緣規劃。',
        ms: 'Membina semula lobus, segmen, subsegmen, salur dan bronkus secara automatik daripada CT dada dengan atau tanpa kontras untuk menyokong kedudukan lesi dan perancangan margin reseksi.',
        th: 'สร้างภาพกลีบปอด ส่วนปอด ส่วนย่อย หลอดเลือด และหลอดลมโดยอัตโนมัติจาก CT ทรวงอกทั้งแบบฉีดและไม่ฉีดสารทึบรังสี เพื่อช่วยระบุตำแหน่งรอยโรคและวางแผนขอบเขตการตัด'
      },
      images: ['assets/products/visual-thorax-planning.webp'],
      focusImage: 'assets/products/focus-thorax-planning-v2.jpg',
      tags: [{key:'chestCT'},{key:'ceMarked'},{key:'fdaCleared'},{key:'ukcaMarked'},{key:'nmpaApproved'},{key:'reconstruction'},{key:'preoperativePlanning'}],
      accent: '#ffd166',
      glow: '#eebd3b36',
      details: {
        en: {
          facts: [
            ['Contrast + non-contrast','CT input support'],
            ['Minute-level','Automated 3D reconstruction'],
            ['Web viewer','Review on monitors and smartphones']
          ],
          capHeading: 'Patient-specific lung anatomy for thoracic surgical planning',
          capIntro: 'Detailed reconstruction, quantitative lesion review and virtual resection planning bring patient-specific thoracic anatomy into one workflow.',
          caps: [
            ['Detailed lung reconstruction','Builds a 3D model from contrast or non-contrast CT, covering lung lobes, segments, subsegments, vessels, bronchi, bone and skin.'],
            ['Lesion and margin planning','Supports quantitative lesion review, virtual nodule positioning and resection-margin definition for preoperative planning.'],
            ['Anatomical variation review','Makes patient-specific bronchovascular relationships and anatomical variations easier to inspect before surgery.'],
            ['Cross-device review and reports','A web-based viewer supports review on monitors and smartphones, with one-click graphic-rich reports for communication.']
          ],
          flowHeading: 'From chest CT to a patient-specific surgical map',
          flowIntro: 'The workflow carries a thoracic CT study from automated reconstruction to a reviewable surgical plan and report.',
          steps: [
            ['Receive the CT study','Contrast or non-contrast chest CT data enter the reconstruction workflow.'],
            ['Reconstruct and quantify','AI creates the thoracic 3D model and organises lesions, vessels, bronchi and segmental anatomy for review.'],
            ['Plan, review and share','The team positions the target and resection margin, reviews the plan through the web viewer and generates a graphic-rich report.']
          ],
          highlightHeading: 'Planning information ready when the surgical team needs it',
          highlightIntro: 'Minute-level reconstruction and flexible delivery help convert routine CT into an accessible planning resource.',
          highlights: [
            ['Stronger decision context','Colour-separated anatomy clarifies the relationship between the target, bronchi, vessels, segments and planned margin.'],
            ['Faster case preparation','Automated minute-level reconstruction reduces the delay between image availability and surgical review.'],
            ['Flexible deployment and integration','On-premise and cloud options can connect with existing hospital information systems while supporting secure access.']
          ]
        },
        'zh-cn': {
          facts: [
            ['增强 + 非增强','支持两类CT输入'],
            ['分钟级','自动三维重建'],
            ['Web阅览器','支持显示器与智能手机查看']
          ],
          capHeading: '以患者个体化肺部解剖支持胸外科手术规划',
          capIntro: '将精细重建、病灶定量复核与虚拟切除规划整合到同一患者个体化胸外科流程中。',
          caps: [
            ['肺部精细重建','根据增强或非增强CT建立肺叶、肺段、亚段、血管、支气管、骨骼及皮肤的三维模型。'],
            ['病灶与切缘规划','支持病灶定量复核、结节虚拟定位及切除边界设定，用于术前方案讨论。'],
            ['解剖变异评估','直观呈现患者特异的支气管血管关系和解剖变异，便于术前复核。'],
            ['跨终端阅览与报告','Web阅览器支持显示器和智能手机查看，并可一键生成图文报告用于沟通。']
          ],
          flowHeading: '从胸部CT到患者个体化手术地图',
          flowIntro: '流程将胸部CT从自动重建推进到可复核的手术规划与图文报告。',
          steps: [
            ['接收CT检查','增强或非增强胸部CT数据进入自动重建流程。'],
            ['重建与量化','AI建立胸部三维模型，并整理病灶、血管、支气管与肺段解剖关系。'],
            ['规划、复核与分享','团队设定靶区和切缘，通过Web阅览器复核方案并生成图文报告。']
          ],
          highlightHeading: '在手术团队需要时提供可用的规划信息',
          highlightIntro: '分钟级重建与灵活交付方式，将常规CT转化为便于使用的术前规划资源。',
          highlights: [
            ['增强决策依据','分色解剖清晰呈现靶区、支气管、血管、肺段与计划切缘之间的关系。'],
            ['加快病例准备','分钟级自动重建缩短影像完成到外科团队开始复核之间的等待。'],
            ['灵活部署与集成','支持本地化与云端部署，并可与医院现有信息系统安全连接。']
          ]
        },
        'zh-tw': {
          facts: [
            ['增強 + 非增強','支援兩類CT輸入'],
            ['分鐘級','自動三維重建'],
            ['Web閱覽器','支援顯示器與智慧型手機查看']
          ],
          capHeading: '以患者個體化肺部解剖支援胸外科手術規劃',
          capIntro: '將精細重建、病灶定量複核與虛擬切除規劃整合到同一患者個體化胸外科流程中。',
          caps: [
            ['肺部精細重建','根據增強或非增強CT建立肺葉、肺段、亞段、血管、支氣管、骨骼及皮膚的三維模型。'],
            ['病灶與切緣規劃','支援病灶定量複核、結節虛擬定位及切除邊界設定，用於術前方案討論。'],
            ['解剖變異評估','直觀呈現患者特異的支氣管血管關係和解剖變異，便於術前複核。'],
            ['跨終端閱覽與報告','Web閱覽器支援顯示器和智慧型手機查看，並可一鍵產生圖文報告用於溝通。']
          ],
          flowHeading: '從胸部CT到患者個體化手術地圖',
          flowIntro: '流程將胸部CT從自動重建推進到可複核的手術規劃與圖文報告。',
          steps: [
            ['接收CT檢查','增強或非增強胸部CT資料進入自動重建流程。'],
            ['重建與量化','AI建立胸部三維模型，並整理病灶、血管、支氣管與肺段解剖關係。'],
            ['規劃、複核與分享','團隊設定靶區和切緣，透過Web閱覽器複核方案並產生圖文報告。']
          ],
          highlightHeading: '在手術團隊需要時提供可用的規劃資訊',
          highlightIntro: '分鐘級重建與靈活交付方式，將常規CT轉化為便於使用的術前規劃資源。',
          highlights: [
            ['增強決策依據','分色解剖清晰呈現靶區、支氣管、血管、肺段與計畫切緣之間的關係。'],
            ['加快病例準備','分鐘級自動重建縮短影像完成到外科團隊開始複核之間的等待。'],
            ['靈活部署與整合','支援本地化與雲端部署，並可與醫院現有資訊系統安全連接。']
          ]
        },
        ms: {
          facts: [
            ['Kontras + tanpa kontras','Sokongan input CT'],
            ['Tahap minit','Pembinaan semula 3D automatik'],
            ['Pemapar web','Semakan pada monitor dan telefon pintar']
          ],
          capHeading: 'Anatomi paru-paru khusus pesakit untuk perancangan toraks',
          capIntro: 'Pembinaan semula terperinci, semakan kuantitatif lesi dan perancangan reseksi maya digabungkan dalam satu aliran toraks khusus pesakit.',
          caps: [
            ['Pembinaan semula paru-paru terperinci','Membina model 3D daripada CT kontras atau tanpa kontras, meliputi lobus, segmen, subsegmen, salur, bronkus, tulang dan kulit.'],
            ['Perancangan lesi dan margin','Menyokong semakan kuantitatif, kedudukan maya nodul dan penentuan margin reseksi untuk perancangan praoperasi.'],
            ['Semakan variasi anatomi','Menjadikan hubungan bronkovaskular dan variasi khusus pesakit lebih mudah diperiksa sebelum pembedahan.'],
            ['Semakan merentas peranti dan laporan','Pemapar web menyokong monitor serta telefon pintar, bersama laporan bergambar satu klik.']
          ],
          flowHeading: 'Daripada CT dada kepada peta pembedahan khusus pesakit',
          flowIntro: 'Kajian CT toraks bergerak daripada pembinaan semula automatik kepada pelan pembedahan dan laporan yang boleh disemak.',
          steps: [
            ['Terima kajian CT','Data CT dada kontras atau tanpa kontras memasuki aliran pembinaan semula.'],
            ['Bina semula dan kuantifikasi','AI menghasilkan model 3D serta menyusun lesi, salur, bronkus dan anatomi segmen untuk semakan.'],
            ['Rancang, semak dan kongsi','Pasukan menetapkan sasaran dan margin, menyemak melalui pemapar web dan menjana laporan bergambar.']
          ],
          highlightHeading: 'Maklumat perancangan tersedia apabila pasukan memerlukannya',
          highlightIntro: 'Pembinaan semula tahap minit dan penghantaran fleksibel menukar CT rutin kepada sumber perancangan yang mudah digunakan.',
          highlights: [
            ['Konteks keputusan lebih kukuh','Anatomi berwarna menjelaskan hubungan sasaran, bronkus, salur, segmen dan margin yang dirancang.'],
            ['Persediaan kes lebih pantas','Pembinaan semula automatik tahap minit mengurangkan masa menunggu sebelum semakan pembedahan.'],
            ['Penggunaan dan integrasi fleksibel','Pilihan setempat dan awan boleh disambungkan secara selamat dengan sistem maklumat hospital.']
          ]
        },
        th: {
          facts: [
            ['CT ฉีดและไม่ฉีดสี','รองรับข้อมูลทั้งสองแบบ'],
            ['ระดับนาที','สร้างภาพ 3 มิติอัตโนมัติ'],
            ['Web viewer','ดูบนจอและสมาร์ตโฟน']
          ],
          capHeading: 'กายวิภาคปอดเฉพาะผู้ป่วยสำหรับการวางแผนผ่าตัดทรวงอก',
          capIntro: 'รวมการสร้างภาพละเอียด การทบทวนรอยโรคเชิงปริมาณ และการวางแผนตัดเสมือนในขั้นตอนเฉพาะผู้ป่วย',
          caps: [
            ['สร้างภาพปอดละเอียด','สร้างโมเดล 3 มิติจาก CT ฉีดหรือไม่ฉีดสี ครอบคลุมกลีบ ส่วนย่อย หลอดเลือด หลอดลม กระดูก และผิวหนัง'],
            ['วางแผนรอยโรคและขอบตัด','รองรับการทบทวนเชิงปริมาณ การวางตำแหน่งก้อนเสมือน และกำหนดขอบตัดก่อนผ่าตัด'],
            ['ตรวจความแปรผัน','ช่วยให้เห็นความสัมพันธ์หลอดลมและหลอดเลือด รวมถึงความแปรผันเฉพาะผู้ป่วยได้ชัดเจน'],
            ['ดูข้ามอุปกรณ์และรายงาน','Web viewer รองรับจอและสมาร์ตโฟน พร้อมรายงานภาพแบบคลิกเดียว']
          ],
          flowHeading: 'จาก CT ทรวงอกสู่แผนที่ผ่าตัดเฉพาะผู้ป่วย',
          flowIntro: 'นำ CT ทรวงอกจากการสร้างภาพอัตโนมัติไปสู่แผนผ่าตัดและรายงานที่พร้อมตรวจทาน',
          steps: [
            ['รับข้อมูล CT','CT ทรวงอกแบบฉีดหรือไม่ฉีดสีเข้าสู่ขั้นตอนสร้างภาพอัตโนมัติ'],
            ['สร้างภาพและวัดผล','AI สร้างโมเดล 3 มิติและจัดรอยโรค หลอดเลือด หลอดลม และส่วนปอดให้พร้อมตรวจทาน'],
            ['วางแผน ตรวจ และแชร์','ทีมกำหนดเป้าหมายกับขอบตัด ตรวจแผนผ่าน Web viewer และสร้างรายงานภาพ']
          ],
          highlightHeading: 'ข้อมูลวางแผนพร้อมเมื่อทีมผ่าตัดต้องการ',
          highlightIntro: 'การสร้างภาพระดับนาทีและการส่งมอบยืดหยุ่น เปลี่ยน CT ปกติให้เป็นทรัพยากรวางแผนที่เข้าถึงง่าย',
          highlights: [
            ['บริบทการตัดสินใจชัดเจน','กายวิภาคแยกสีช่วยแสดงความสัมพันธ์ของเป้าหมาย หลอดลม หลอดเลือด ส่วนปอด และขอบตัด'],
            ['เตรียมเคสได้เร็วขึ้น','การสร้างภาพอัตโนมัติระดับนาทีลดเวลารอระหว่างได้รับภาพและเริ่มทบทวนการผ่าตัด'],
            ['ติดตั้งและเชื่อมต่อยืดหยุ่น','รองรับทั้งในสถานที่และคลาวด์ พร้อมเชื่อมระบบข้อมูลโรงพยาบาลอย่างปลอดภัย']
          ]
        }
      }
    },

    'liver-planning': {
      title: 'Liver Planning',
      categoryKey: 'interventionTreatment',
      summaryKey: 'liverDesc',
      summaries: {
        en: 'Automatically reconstructs Couinaud segments, vessels and the biliary system from abdominal CT, with volume calculation and virtual lesion and resection-margin planning.',
        'zh-cn': '可根据腹部CT自动重建Couinaud肝段、血管及胆道系统，并支持体积计算、病灶定位与虚拟切缘规划。',
        'zh-tw': '可根據腹部CT自動重建Couinaud肝段、血管及膽道系統，並支援體積計算、病灶定位與虛擬切緣規劃。',
        ms: 'Membina semula segmen Couinaud, salur dan sistem biliari secara automatik daripada CT abdomen, dengan pengiraan isipadu serta perancangan maya lesi dan margin reseksi.',
        th: 'สร้างภาพส่วนตับ Couinaud หลอดเลือด และระบบท่อน้ำดีโดยอัตโนมัติจาก CT ช่องท้อง พร้อมคำนวณปริมาตร ระบุตำแหน่งรอยโรค และวางแผนขอบเขตการตัดเสมือน'
      },
      images: ['assets/products/visual-liver-planning.webp'],
      focusImage: 'assets/products/focus-liver-planning.jpg',
      tags: [{key:'abdominalCT'},{key:'ceMarked'},{key:'fdaCleared'},{key:'ukcaMarked'},{key:'nmpaApproved'},{key:'reconstruction'},{key:'preoperativePlanning'}],
      accent: '#ffb56b',
      glow: '#ec8e3038',
      details: {
        en: {
          facts: [
            ['Couinaud','Segment-based liver model'],
            ['Minute-level','Automated 3D reconstruction'],
            ['Web viewer','Review on monitors and smartphones']
          ],
          capHeading: 'Patient-specific liver anatomy for resection planning',
          capIntro: 'Detailed reconstruction, lesion quantification and virtual resection planning bring the liver, vessels and biliary system into one reviewable model.',
          caps: [
            ['Detailed liver reconstruction','Builds a 3D model of Couinaud segments, hepatic vessels, biliary system, bone and skin to reveal patient-specific anatomy.'],
            ['Quantitative lesion analysis','Automatically calculates volumes and positions lesions within the surrounding vascular and biliary anatomy.'],
            ['Virtual resection planning','Supports virtual placement of nodules and resection margins to define and review a planned resection area before surgery.'],
            ['Cross-device review and reports','A web-based viewer supports monitors and smartphones, with one-click graphic-rich reports for clinical and patient communication.']
          ],
          flowHeading: 'From abdominal CT to a reviewable liver resection plan',
          flowIntro: 'The workflow turns CT data into a segmented anatomical model, quantitative target review and a shareable planning report.',
          steps: [
            ['Receive the CT study','Abdominal CT data enter the automated reconstruction workflow for liver anatomy and related structures.'],
            ['Reconstruct and quantify','AI builds the 3D model, calculates volumes and places lesions in relation to vessels and bile ducts.'],
            ['Plan, review and share','The team defines the resection margin, reviews the plan through the web viewer and generates a graphic-rich report.']
          ],
          highlightHeading: 'A clearer view of anatomy, target and planned margin',
          highlightIntro: 'Minute-level reconstruction and flexible access help move surgical review from complex slices to a patient-specific 3D planning resource.',
          highlights: [
            ['Anatomical variation in context','Segment, vessel and biliary relationships are separated visually to support safer, more informed planning discussions.'],
            ['Faster case preparation and communication','Automated reconstruction and one-click reports help teams prepare cases and explain the proposed approach.'],
            ['Flexible deployment and integration','On-premise and cloud options can connect with existing hospital information systems while supporting secure access.']
          ]
        },
        'zh-cn': {
          facts: [
            ['Couinaud','基于肝段的三维模型'],
            ['分钟级','自动三维重建'],
            ['Web阅览器','支持显示器与智能手机查看']
          ],
          capHeading: '以患者个体化肝脏解剖支持切除规划',
          capIntro: '将精细重建、病灶定量与虚拟切除规划整合为涵盖肝脏、血管及胆道系统的可复核模型。',
          caps: [
            ['肝脏精细重建','建立Couinaud肝段、肝脏血管、胆道系统、骨骼及皮肤的三维模型，呈现患者个体化解剖。'],
            ['病灶定量分析','自动计算体积，并将病灶定位在周围血管和胆道解剖环境中。'],
            ['虚拟切除规划','支持结节与切缘的虚拟定位，在术前定义并复核计划切除区域。'],
            ['跨终端阅览与报告','Web阅览器支持显示器和智能手机查看，并可一键生成图文报告用于临床及患者沟通。']
          ],
          flowHeading: '从腹部CT到可复核的肝切除规划',
          flowIntro: '流程将CT数据转化为分割后的解剖模型、定量靶区复核和可分享的规划报告。',
          steps: [
            ['接收CT检查','腹部CT数据进入肝脏及相关结构的自动重建流程。'],
            ['重建与量化','AI建立三维模型、计算体积，并呈现病灶与血管及胆道的空间关系。'],
            ['规划、复核与分享','团队设定切缘，通过Web阅览器复核方案并生成图文报告。']
          ],
          highlightHeading: '更清晰地呈现解剖、靶区与计划切缘',
          highlightIntro: '分钟级重建与灵活访问方式，将复杂切片转化为患者个体化三维规划资源。',
          highlights: [
            ['在完整环境中识别解剖变异','肝段、血管与胆道关系通过分色展示，为更充分的术前讨论提供支持。'],
            ['加快病例准备与沟通','自动重建和一键图文报告帮助团队准备病例并说明拟定方案。'],
            ['灵活部署与集成','支持本地化与云端部署，并可与医院现有信息系统安全连接。']
          ]
        },
        'zh-tw': {
          facts: [
            ['Couinaud','基於肝段的三維模型'],
            ['分鐘級','自動三維重建'],
            ['Web閱覽器','支援顯示器與智慧型手機查看']
          ],
          capHeading: '以患者個體化肝臟解剖支援切除規劃',
          capIntro: '將精細重建、病灶定量與虛擬切除規劃整合為涵蓋肝臟、血管及膽道系統的可複核模型。',
          caps: [
            ['肝臟精細重建','建立Couinaud肝段、肝臟血管、膽道系統、骨骼及皮膚的三維模型，呈現患者個體化解剖。'],
            ['病灶定量分析','自動計算體積，並將病灶定位在周圍血管和膽道解剖環境中。'],
            ['虛擬切除規劃','支援結節與切緣的虛擬定位，在術前定義並複核計畫切除區域。'],
            ['跨終端閱覽與報告','Web閱覽器支援顯示器和智慧型手機查看，並可一鍵產生圖文報告用於臨床及患者溝通。']
          ],
          flowHeading: '從腹部CT到可複核的肝切除規劃',
          flowIntro: '流程將CT資料轉化為分割後的解剖模型、定量靶區複核和可分享的規劃報告。',
          steps: [
            ['接收CT檢查','腹部CT資料進入肝臟及相關結構的自動重建流程。'],
            ['重建與量化','AI建立三維模型、計算體積，並呈現病灶與血管及膽道的空間關係。'],
            ['規劃、複核與分享','團隊設定切緣，透過Web閱覽器複核方案並產生圖文報告。']
          ],
          highlightHeading: '更清晰地呈現解剖、靶區與計畫切緣',
          highlightIntro: '分鐘級重建與靈活存取方式，將複雜切片轉化為患者個體化三維規劃資源。',
          highlights: [
            ['在完整環境中識別解剖變異','肝段、血管與膽道關係透過分色展示，為更充分的術前討論提供支援。'],
            ['加快病例準備與溝通','自動重建和一鍵圖文報告協助團隊準備病例並說明擬定方案。'],
            ['靈活部署與整合','支援本地化與雲端部署，並可與醫院現有資訊系統安全連接。']
          ]
        },
        ms: {
          facts: [
            ['Couinaud','Model hati berasaskan segmen'],
            ['Tahap minit','Pembinaan semula 3D automatik'],
            ['Pemapar web','Semakan pada monitor dan telefon pintar']
          ],
          capHeading: 'Anatomi hati khusus pesakit untuk perancangan reseksi',
          capIntro: 'Pembinaan semula terperinci, kuantifikasi lesi dan perancangan reseksi maya menggabungkan hati, salur dan sistem biliari dalam satu model.',
          caps: [
            ['Pembinaan semula hati terperinci','Membina model 3D segmen Couinaud, salur hati, sistem biliari, tulang dan kulit untuk menunjukkan anatomi khusus pesakit.'],
            ['Analisis kuantitatif lesi','Mengira isipadu secara automatik dan meletakkan lesi dalam konteks vaskular serta biliari.'],
            ['Perancangan reseksi maya','Menyokong kedudukan maya nodul dan margin reseksi untuk menentukan kawasan reseksi sebelum pembedahan.'],
            ['Semakan merentas peranti dan laporan','Pemapar web menyokong monitor serta telefon pintar, bersama laporan bergambar satu klik untuk komunikasi.']
          ],
          flowHeading: 'Daripada CT abdomen kepada pelan reseksi hati yang boleh disemak',
          flowIntro: 'Data CT diubah kepada model anatomi bersegmen, semakan sasaran kuantitatif dan laporan perancangan yang boleh dikongsi.',
          steps: [
            ['Terima kajian CT','Data CT abdomen memasuki aliran pembinaan semula automatik untuk hati dan struktur berkaitan.'],
            ['Bina semula dan kuantifikasi','AI membina model 3D, mengira isipadu dan menunjukkan lesi berhubung salur serta duktus hempedu.'],
            ['Rancang, semak dan kongsi','Pasukan menetapkan margin, menyemak melalui pemapar web dan menjana laporan bergambar.']
          ],
          highlightHeading: 'Pandangan lebih jelas terhadap anatomi, sasaran dan margin',
          highlightIntro: 'Pembinaan semula tahap minit dan akses fleksibel menukar irisan kompleks kepada sumber perancangan 3D khusus pesakit.',
          highlights: [
            ['Variasi anatomi dalam konteks','Hubungan segmen, salur dan biliari dipisahkan secara visual untuk perbincangan perancangan yang lebih bermaklumat.'],
            ['Persediaan kes dan komunikasi lebih pantas','Pembinaan semula automatik dan laporan satu klik membantu pasukan menyediakan kes serta menerangkan pendekatan.'],
            ['Penggunaan dan integrasi fleksibel','Pilihan setempat dan awan boleh disambungkan secara selamat dengan sistem maklumat hospital.']
          ]
        },
        th: {
          facts: [
            ['Couinaud','โมเดลตับตามส่วนกายวิภาค'],
            ['ระดับนาที','สร้างภาพ 3 มิติอัตโนมัติ'],
            ['Web viewer','ดูบนจอและสมาร์ตโฟน']
          ],
          capHeading: 'กายวิภาคตับเฉพาะผู้ป่วยสำหรับวางแผนการตัด',
          capIntro: 'รวมการสร้างภาพละเอียด การวัดรอยโรค และการวางแผนตัดเสมือนเป็นโมเดลเดียวของตับ หลอดเลือด และระบบท่อน้ำดี',
          caps: [
            ['สร้างภาพตับละเอียด','สร้างโมเดล 3 มิติของส่วน Couinaud หลอดเลือดตับ ระบบท่อน้ำดี กระดูก และผิวหนัง'],
            ['วิเคราะห์รอยโรคเชิงปริมาณ','คำนวณปริมาตรอัตโนมัติและแสดงตำแหน่งรอยโรคเทียบกับหลอดเลือดและท่อน้ำดี'],
            ['วางแผนตัดเสมือน','รองรับการวางตำแหน่งก้อนและขอบตัดเสมือน เพื่อกำหนดและตรวจพื้นที่ตัดก่อนผ่าตัด'],
            ['ดูข้ามอุปกรณ์และรายงาน','Web viewer รองรับจอและสมาร์ตโฟน พร้อมรายงานภาพแบบคลิกเดียวสำหรับการสื่อสาร']
          ],
          flowHeading: 'จาก CT ช่องท้องสู่แผนตัดตับที่พร้อมตรวจทาน',
          flowIntro: 'เปลี่ยนข้อมูล CT เป็นโมเดลกายวิภาค การทบทวนเป้าหมายเชิงปริมาณ และรายงานที่แชร์ได้',
          steps: [
            ['รับข้อมูล CT','CT ช่องท้องเข้าสู่ขั้นตอนสร้างภาพอัตโนมัติสำหรับตับและโครงสร้างที่เกี่ยวข้อง'],
            ['สร้างภาพและวัดผล','AI สร้างโมเดล 3 มิติ คำนวณปริมาตร และแสดงรอยโรคสัมพันธ์กับหลอดเลือดและท่อน้ำดี'],
            ['วางแผน ตรวจ และแชร์','ทีมกำหนดขอบตัด ตรวจแผนผ่าน Web viewer และสร้างรายงานภาพ']
          ],
          highlightHeading: 'เห็นกายวิภาค เป้าหมาย และขอบตัดได้ชัดเจนขึ้น',
          highlightIntro: 'การสร้างภาพระดับนาทีและการเข้าถึงยืดหยุ่น เปลี่ยนภาพตัดซับซ้อนเป็นทรัพยากรวางแผน 3 มิติเฉพาะผู้ป่วย',
          highlights: [
            ['เห็นความแปรผันในบริบท','แยกสีส่วนตับ หลอดเลือด และท่อน้ำดี เพื่อสนับสนุนการหารือก่อนผ่าตัด'],
            ['เตรียมเคสและสื่อสารเร็วขึ้น','การสร้างภาพอัตโนมัติและรายงานคลิกเดียวช่วยเตรียมเคสและอธิบายแนวทาง'],
            ['ติดตั้งและเชื่อมต่อยืดหยุ่น','รองรับทั้งในสถานที่และคลาวด์ พร้อมเชื่อมระบบข้อมูลโรงพยาบาลอย่างปลอดภัย']
          ]
        }
      }
    },

    'urology-planning': {
      title: 'Urology Planning',
      categoryKey: 'interventionTreatment',
      summaryKey: 'urologyDesc',
      summaries: {
        en: 'Automatically reconstructs the kidneys, renal vessels, ureters, bladder and adrenal glands from abdominal CT, with lesion quantification and partial-nephrectomy planning.',
        'zh-cn': '可根据腹部CT自动重建肾脏、肾血管、输尿管、膀胱与肾上腺，并支持病灶定量和肾部分切除规划。',
        'zh-tw': '可根據腹部CT自動重建腎臟、腎血管、輸尿管、膀胱與腎上腺，並支援病灶定量和腎部分切除規劃。',
        ms: 'Membina semula buah pinggang, salur renal, ureter, pundi kencing dan kelenjar adrenal secara automatik daripada CT abdomen, dengan kuantifikasi lesi dan perancangan nefrektomi separa.',
        th: 'สร้างภาพไต หลอดเลือดไต ท่อไต กระเพาะปัสสาวะ และต่อมหมวกไตโดยอัตโนมัติจาก CT ช่องท้อง พร้อมวัดรอยโรคและวางแผนผ่าตัดไตบางส่วน'
      },
      images: ['assets/products/visual-urology-planning.webp'],
      focusImage: 'assets/products/focus-urology-planning.jpg',
      tags: [{key:'abdominalCT'},{key:'ceMarked'},{key:'fdaCleared'},{key:'ukcaMarked'},{key:'nmpaApproved'},{key:'reconstruction'},{key:'preoperativePlanning'}],
      accent: '#83d7ff',
      glow: '#4698ed36',
      details: {
        en: {
          facts: [
            ['5 anatomy groups','Kidneys, bladder, renal vessels, ureters and adrenal glands'],
            ['Minute-level','Automated 3D reconstruction'],
            ['Web viewer','Review on monitors and smartphones']
          ],
          capHeading: 'Patient-specific urinary anatomy for partial-nephrectomy planning',
          capIntro: 'Detailed reconstruction, lesion quantification and virtual resection planning bring the kidneys, vessels and urinary tract into one reviewable model.',
          caps: [
            ['Detailed urinary reconstruction','Builds a 3D model of the kidneys, bladder, renal arteries and veins, ureters and adrenal glands to reveal patient-specific anatomy.'],
            ['Quantitative lesion analysis','Automatically calculates volumes and positions renal lesions in relation to vessels, collecting system and surrounding anatomy.'],
            ['Virtual resection planning','Supports virtual placement of nodules and resection margins to review the planned area for partial nephrectomy.'],
            ['Cross-device review and reports','A web-based viewer supports monitors and smartphones, with one-click graphic-rich reports for clinical and patient communication.']
          ],
          flowHeading: 'From abdominal CT to a reviewable urology surgical plan',
          flowIntro: 'The workflow turns CT data into a segmented urinary model, quantitative target review and a shareable planning report.',
          steps: [
            ['Receive the CT study','Abdominal CT data enter the automated reconstruction workflow for the urinary system and related structures.'],
            ['Reconstruct and quantify','AI builds the 3D model, calculates volumes and places renal lesions in relation to vessels and the collecting system.'],
            ['Plan, review and share','The team defines the resection margin, reviews the plan through the web viewer and generates a graphic-rich report.']
          ],
          highlightHeading: 'A clearer view of renal anatomy, target and preservation strategy',
          highlightIntro: 'Minute-level reconstruction and flexible access help turn complex CT slices into a patient-specific planning resource for partial nephrectomy.',
          highlights: [
            ['Anatomical variation in context','Kidney, vessel, ureter and adrenal relationships are separated visually to support more informed planning discussions.'],
            ['Faster case preparation and communication','Automated reconstruction and one-click reports help teams prepare cases and explain the proposed approach.'],
            ['Flexible deployment and integration','On-premise and cloud options can connect with existing hospital information systems while supporting secure access.']
          ]
        },
        'zh-cn': {
          facts: [
            ['5类解剖','肾脏、膀胱、肾血管、输尿管与肾上腺'],
            ['分钟级','自动三维重建'],
            ['Web阅览器','支持显示器与智能手机查看']
          ],
          capHeading: '以患者个体化泌尿解剖支持肾部分切除规划',
          capIntro: '将精细重建、病灶定量与虚拟切除规划整合为涵盖肾脏、血管及泌尿系统的可复核模型。',
          caps: [
            ['泌尿系统精细重建','建立肾脏、膀胱、肾动静脉、输尿管及肾上腺的三维模型，呈现患者个体化解剖。'],
            ['病灶定量分析','自动计算体积，并呈现肾脏病灶与血管、集合系统及周围结构的空间关系。'],
            ['虚拟切除规划','支持结节与切缘的虚拟定位，用于复核肾部分切除的计划区域。'],
            ['跨终端阅览与报告','Web阅览器支持显示器和智能手机查看，并可一键生成图文报告用于临床及患者沟通。']
          ],
          flowHeading: '从腹部CT到可复核的泌尿外科规划',
          flowIntro: '流程将CT数据转化为分割后的泌尿系统模型、定量靶区复核和可分享的规划报告。',
          steps: [
            ['接收CT检查','腹部CT数据进入泌尿系统及相关结构的自动重建流程。'],
            ['重建与量化','AI建立三维模型、计算体积，并呈现肾脏病灶与血管及集合系统的关系。'],
            ['规划、复核与分享','团队设定切缘，通过Web阅览器复核方案并生成图文报告。']
          ],
          highlightHeading: '更清晰地呈现肾脏解剖、靶区与保留策略',
          highlightIntro: '分钟级重建与灵活访问方式，将复杂CT切片转化为肾部分切除的患者个体化规划资源。',
          highlights: [
            ['在完整环境中识别解剖变异','肾脏、血管、输尿管与肾上腺关系通过分色展示，为更充分的术前讨论提供支持。'],
            ['加快病例准备与沟通','自动重建和一键图文报告帮助团队准备病例并说明拟定方案。'],
            ['灵活部署与集成','支持本地化与云端部署，并可与医院现有信息系统安全连接。']
          ]
        },
        'zh-tw': {
          facts: [
            ['5類解剖','腎臟、膀胱、腎血管、輸尿管與腎上腺'],
            ['分鐘級','自動三維重建'],
            ['Web閱覽器','支援顯示器與智慧型手機查看']
          ],
          capHeading: '以患者個體化泌尿解剖支援腎部分切除規劃',
          capIntro: '將精細重建、病灶定量與虛擬切除規劃整合為涵蓋腎臟、血管及泌尿系統的可複核模型。',
          caps: [
            ['泌尿系統精細重建','建立腎臟、膀胱、腎動靜脈、輸尿管及腎上腺的三維模型，呈現患者個體化解剖。'],
            ['病灶定量分析','自動計算體積，並呈現腎臟病灶與血管、集合系統及周圍結構的空間關係。'],
            ['虛擬切除規劃','支援結節與切緣的虛擬定位，用於複核腎部分切除的計畫區域。'],
            ['跨終端閱覽與報告','Web閱覽器支援顯示器和智慧型手機查看，並可一鍵產生圖文報告用於臨床及患者溝通。']
          ],
          flowHeading: '從腹部CT到可複核的泌尿外科規劃',
          flowIntro: '流程將CT資料轉化為分割後的泌尿系統模型、定量靶區複核和可分享的規劃報告。',
          steps: [
            ['接收CT檢查','腹部CT資料進入泌尿系統及相關結構的自動重建流程。'],
            ['重建與量化','AI建立三維模型、計算體積，並呈現腎臟病灶與血管及集合系統的關係。'],
            ['規劃、複核與分享','團隊設定切緣，透過Web閱覽器複核方案並產生圖文報告。']
          ],
          highlightHeading: '更清晰地呈現腎臟解剖、靶區與保留策略',
          highlightIntro: '分鐘級重建與靈活存取方式，將複雜CT切片轉化為腎部分切除的患者個體化規劃資源。',
          highlights: [
            ['在完整環境中識別解剖變異','腎臟、血管、輸尿管與腎上腺關係透過分色展示，為更充分的術前討論提供支援。'],
            ['加快病例準備與溝通','自動重建和一鍵圖文報告協助團隊準備病例並說明擬定方案。'],
            ['靈活部署與整合','支援本地化與雲端部署，並可與醫院現有資訊系統安全連接。']
          ]
        },
        ms: {
          facts: [
            ['5 kumpulan anatomi','Buah pinggang, pundi kencing, salur renal, ureter dan adrenal'],
            ['Tahap minit','Pembinaan semula 3D automatik'],
            ['Pemapar web','Semakan pada monitor dan telefon pintar']
          ],
          capHeading: 'Anatomi urinari khusus pesakit untuk perancangan nefrektomi separa',
          capIntro: 'Pembinaan semula terperinci, kuantifikasi lesi dan perancangan reseksi maya menggabungkan buah pinggang, salur dan sistem urinari dalam satu model.',
          caps: [
            ['Pembinaan semula urinari terperinci','Membina model 3D buah pinggang, pundi kencing, arteri dan vena renal, ureter serta kelenjar adrenal.'],
            ['Analisis kuantitatif lesi','Mengira isipadu dan menunjukkan lesi renal berhubung salur, sistem pengumpulan dan anatomi sekeliling.'],
            ['Perancangan reseksi maya','Menyokong kedudukan maya nodul dan margin reseksi untuk menyemak kawasan nefrektomi separa yang dirancang.'],
            ['Semakan merentas peranti dan laporan','Pemapar web menyokong monitor serta telefon pintar, bersama laporan bergambar satu klik untuk komunikasi.']
          ],
          flowHeading: 'Daripada CT abdomen kepada pelan pembedahan urologi yang boleh disemak',
          flowIntro: 'Data CT diubah kepada model urinari bersegmen, semakan sasaran kuantitatif dan laporan perancangan yang boleh dikongsi.',
          steps: [
            ['Terima kajian CT','Data CT abdomen memasuki aliran pembinaan semula automatik untuk sistem urinari dan struktur berkaitan.'],
            ['Bina semula dan kuantifikasi','AI membina model 3D, mengira isipadu dan menunjukkan lesi renal berhubung salur serta sistem pengumpulan.'],
            ['Rancang, semak dan kongsi','Pasukan menetapkan margin, menyemak melalui pemapar web dan menjana laporan bergambar.']
          ],
          highlightHeading: 'Pandangan lebih jelas terhadap anatomi renal, sasaran dan strategi pemeliharaan',
          highlightIntro: 'Pembinaan semula tahap minit dan akses fleksibel menukar irisan CT kompleks kepada sumber perancangan khusus pesakit.',
          highlights: [
            ['Variasi anatomi dalam konteks','Hubungan buah pinggang, salur, ureter dan adrenal dipisahkan secara visual untuk perbincangan lebih bermaklumat.'],
            ['Persediaan kes dan komunikasi lebih pantas','Pembinaan semula automatik dan laporan satu klik membantu pasukan menyediakan kes serta menerangkan pendekatan.'],
            ['Penggunaan dan integrasi fleksibel','Pilihan setempat dan awan boleh disambungkan secara selamat dengan sistem maklumat hospital.']
          ]
        },
        th: {
          facts: [
            ['5 กลุ่มกายวิภาค','ไต กระเพาะปัสสาวะ หลอดเลือดไต ท่อไต และต่อมหมวกไต'],
            ['ระดับนาที','สร้างภาพ 3 มิติอัตโนมัติ'],
            ['Web viewer','ดูบนจอและสมาร์ตโฟน']
          ],
          capHeading: 'กายวิภาคระบบปัสสาวะเฉพาะผู้ป่วยสำหรับวางแผนตัดไตบางส่วน',
          capIntro: 'รวมการสร้างภาพละเอียด การวัดรอยโรค และการวางแผนตัดเสมือนเป็นโมเดลเดียวของไต หลอดเลือด และระบบปัสสาวะ',
          caps: [
            ['สร้างภาพระบบปัสสาวะละเอียด','สร้างโมเดล 3 มิติของไต กระเพาะปัสสาวะ หลอดเลือดแดงและดำไต ท่อไต และต่อมหมวกไต'],
            ['วิเคราะห์รอยโรคเชิงปริมาณ','คำนวณปริมาตรและแสดงรอยโรคไตสัมพันธ์กับหลอดเลือด ระบบกรวยไต และโครงสร้างรอบข้าง'],
            ['วางแผนตัดเสมือน','รองรับการวางตำแหน่งก้อนและขอบตัดเสมือน เพื่อตรวจพื้นที่ตัดไตบางส่วนที่วางแผนไว้'],
            ['ดูข้ามอุปกรณ์และรายงาน','Web viewer รองรับจอและสมาร์ตโฟน พร้อมรายงานภาพแบบคลิกเดียวสำหรับการสื่อสาร']
          ],
          flowHeading: 'จาก CT ช่องท้องสู่แผนผ่าตัดระบบปัสสาวะที่พร้อมตรวจทาน',
          flowIntro: 'เปลี่ยนข้อมูล CT เป็นโมเดลระบบปัสสาวะ การทบทวนเป้าหมายเชิงปริมาณ และรายงานที่แชร์ได้',
          steps: [
            ['รับข้อมูล CT','CT ช่องท้องเข้าสู่ขั้นตอนสร้างภาพอัตโนมัติสำหรับระบบปัสสาวะและโครงสร้างที่เกี่ยวข้อง'],
            ['สร้างภาพและวัดผล','AI สร้างโมเดล 3 มิติ คำนวณปริมาตร และแสดงรอยโรคไตสัมพันธ์กับหลอดเลือดและระบบกรวยไต'],
            ['วางแผน ตรวจ และแชร์','ทีมกำหนดขอบตัด ตรวจแผนผ่าน Web viewer และสร้างรายงานภาพ']
          ],
          highlightHeading: 'เห็นกายวิภาคไต เป้าหมาย และกลยุทธ์การเก็บเนื้อไตได้ชัดเจนขึ้น',
          highlightIntro: 'การสร้างภาพระดับนาทีและการเข้าถึงยืดหยุ่น เปลี่ยน CT ซับซ้อนเป็นทรัพยากรวางแผนเฉพาะผู้ป่วย',
          highlights: [
            ['เห็นความแปรผันในบริบท','แยกสีไต หลอดเลือด ท่อไต และต่อมหมวกไต เพื่อสนับสนุนการหารือก่อนผ่าตัด'],
            ['เตรียมเคสและสื่อสารเร็วขึ้น','การสร้างภาพอัตโนมัติและรายงานคลิกเดียวช่วยเตรียมเคสและอธิบายแนวทาง'],
            ['ติดตั้งและเชื่อมต่อยืดหยุ่น','รองรับทั้งในสถานที่และคลาวด์ พร้อมเชื่อมระบบข้อมูลโรงพยาบาลอย่างปลอดภัย']
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
            ['8-channel','Advanced-version EMG configuration'],
            ['24 gestures','Standard-version preset library']
          ],
          capHeading: 'Intent-driven control for everyday upper-limb function',
          capIntro: 'Two product configurations translate neuroelectric and muscle signals into hand movement for users with upper-limb loss.',
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
          highlightIntro: 'An advanced intent-recognition version and a standard preset-gesture version share a durable hand platform.',
          highlights: [
            ['Advanced or standard control','Configuration can be aligned with amputation level, available signals and the user’s functional goals.'],
            ['Engineered for daily use','Quiet gearing, anti-impact joints, lightweight materials and components tested for repeated opening and closing support everyday use.'],
            ['Product credentials','Product credentials include FDA 510(k) clearance, FDA Class I registration and a national rehabilitation-assistive-device quality report.']
          ]
        },
        'zh-cn': {
          facts: [
            ['5指','支持独立运动与协同操作'],
            ['8通道','高端版肌电配置'],
            ['24种手势','标准版预设手势库']
          ],
          capHeading: '以运动意图驱动日常上肢功能',
          capIntro: '两种产品配置将神经电与肌肉电信号转化为仿生手动作，满足上肢缺失用户的日常功能需求。',
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
          highlightIntro: '意图识别高端版与预设手势标准版共用耐用的仿生手平台。',
          highlights: [
            ['高端或标准控制','可根据截肢部位、可用信号及用户功能目标选择配置。'],
            ['面向日常使用设计','低噪声传动、防撞关节、轻量材料及经反复开合测试的关键部件支持日常使用。'],
            ['产品资质','产品列有FDA 510(k)许可、FDA I类产品注册和国家康复辅具质检报告。']
          ]
        },
        'zh-tw': {
          facts: [
            ['5指','支援獨立運動與協同操作'],
            ['8通道','高階版肌電設定'],
            ['24種手勢','標準版預設手勢庫']
          ],
          capHeading: '以運動意圖驅動日常上肢功能',
          capIntro: '兩種產品設定將神經電與肌肉電訊號轉化為仿生手動作，滿足上肢缺失使用者的日常功能需求。',
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
          highlightIntro: '意圖識別高階版與預設手勢標準版共用耐用的仿生手平台。',
          highlights: [
            ['高階或標準控制','可根據截肢部位、可用訊號及使用者功能目標選擇設定。'],
            ['面向日常使用設計','低噪聲傳動、防撞關節、輕量材料及經反覆開合測試的關鍵零件支援日常使用。'],
            ['產品資格','產品列有FDA 510(k)許可、FDA I類產品註冊和國家康復輔具質檢報告。']
          ]
        },
        ms: {
          facts: [
            ['5 jari','Pergerakan bebas dan terselaras'],
            ['8 saluran','Konfigurasi EMG untuk versi lanjutan'],
            ['24 gerak isyarat','Pustaka pratetap untuk versi standard']
          ],
          capHeading: 'Kawalan berasaskan niat untuk fungsi anggota atas harian',
          capIntro: 'Dua konfigurasi menterjemah isyarat saraf dan otot kepada pergerakan tangan.',
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
          highlightIntro: 'Versi pengecaman niat lanjutan dan versi gerak isyarat standard berkongsi platform tangan yang tahan lasak.',
          highlights: [
            ['Kawalan lanjutan atau standard','Konfigurasi boleh dipadankan dengan tahap amputasi, isyarat dan matlamat fungsi.'],
            ['Direka untuk kegunaan harian','Gear senyap, sendi tahan hentakan, bahan ringan dan komponen tahan ulang guna menyokong penggunaan harian.'],
            ['Kelayakan produk','Produk menyenaraikan pelepasan FDA 510(k), pendaftaran FDA Kelas I dan laporan kualiti kebangsaan.']
          ]
        },
        th: {
          facts: [
            ['5 นิ้ว','เคลื่อนไหวอิสระและประสานกัน'],
            ['8 ช่อง','การกำหนดค่า EMG สำหรับรุ่นขั้นสูง'],
            ['24 ท่าทาง','คลังท่าทางสำเร็จรูปของรุ่นมาตรฐาน']
          ],
          capHeading: 'ควบคุมด้วยเจตนาการเคลื่อนไหวเพื่อการใช้ชีวิตประจำวัน',
          capIntro: 'สองรุ่นแปลงสัญญาณประสาทและกล้ามเนื้อเป็นการเคลื่อนไหวของมือสำหรับผู้สูญเสียแขน',
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
          highlightIntro: 'รุ่นรู้จำเจตนาขั้นสูงและรุ่นท่าทางสำเร็จรูปใช้แพลตฟอร์มมือที่ทนทานร่วมกัน',
          highlights: [
            ['ควบคุมขั้นสูงหรือมาตรฐาน','เลือกให้เหมาะกับระดับการตัดแขน สัญญาณที่ใช้ได้ และเป้าหมายการทำงาน'],
            ['ออกแบบเพื่อใช้ทุกวัน','ชุดเกียร์เงียบ ข้อต่อกันกระแทก วัสดุน้ำหนักเบา และชิ้นส่วนทนต่อการเปิดปิดซ้ำรองรับการใช้งานประจำวัน'],
            ['คุณสมบัติผลิตภัณฑ์','ผลิตภัณฑ์มี FDA 510(k), การขึ้นทะเบียน FDA Class I และรายงานคุณภาพอุปกรณ์ฟื้นฟูระดับชาติ']
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
    const summary=product.summaries?.[lang] || mainText(lang,product.summaryKey);
    document.querySelector('#product-title').textContent=title;
    document.querySelector('#product-summary').textContent=summary;
    document.querySelector('#product-category').textContent=mainText(lang,product.categoryKey);

    document.body.style.setProperty('--product-accent',product.accent);
    document.body.style.setProperty('--product-accent-glow',product.glow);

    const alt=uiText(lang,'imageAlt').replace('{product}',title);
    const gallery=document.querySelector('#product-gallery');
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

    const secondarySection=document.querySelector('#product-secondary-visual');
    if(product.secondaryImage){
      document.querySelector('#secondary-visual-heading').textContent=product.secondaryHeadings[lang] || product.secondaryHeadings.en;
      const secondaryImage=document.querySelector('#secondary-visual-image');
      secondaryImage.src=product.secondaryImage;
      secondaryImage.alt=alt;
      secondarySection.hidden=false;
    }else{
      secondarySection.hidden=true;
    }

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
