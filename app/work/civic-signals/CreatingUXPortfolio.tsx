"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

const navItems = [
  ["overview", "项目概述"],
  ["research", "用户研究"],
  ["journey", "体验旅程"],
  ["wireframes", "设计线稿"],
  ["usability", "可用性测试"],
  ["mockups", "高保真原型"],
  ["video-walkthrough", "原型演示"],
  ["accessibility", "无障碍设计"],
  ["reflection", "反思与展望"]
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const }
};

const tags = ["UX 案例研究", "移动端应用", "AI 智能推荐", "无现金支付", "多语言体验"];

const snapshot = [
  ["项目时长", "2025.02.20 - 03.20"],
  ["我的角色", "独立 UX 设计师"],
  ["主要职责", "用户研究、信息架构、线稿绘制、交互设计、高保真原型、可用性测试"],
  ["设计成果", "日式餐饮移动点餐与无现金支付系统案例研究"]
];

const painPoints = [
  {
    num: 1,
    title: "支付方式受限",
    descJp: "many cash-only restaurants",
    desc: "许多日本传统店铺仍仅支持现金。用户希望能够使用更加多元的无现金支付方式（如信用卡和 QR 扫码支付）。"
  },
  {
    num: 2,
    title: "国际游客点餐困难",
    descJp: "Menus available only in Japanese",
    desc: "菜单通常仅提供日语版本。亟需提供基础多语言界面支持，帮助海外游客能够无障碍地浏览并自信下单。"
  },
  {
    num: 3,
    title: "繁琐的定制步骤",
    descJp: "Complex Customization",
    desc: "在现有点餐平台上，用户发现调节甜度、挑选配料（toppings）以及标注过敏源及膳食偏好等定制操作过于繁杂难用。"
  },
  {
    num: 4,
    title: "混乱的菜单导航",
    descJp: "Cluttered Navigation",
    desc: "商品陈列繁杂、分类缺乏逻辑，使得用户难以迅速定位想要购买的餐品，容易产生视觉和决策疲劳。"
  }
];

const journeySteps = [
  {
    step: "扫描二维码",
    stage: "阶段一：扫描桌上二维码进入点餐系统",
    action: "打开手机相机或扫码软件，对准餐桌贴纸上的 QR 二维码进行扫码。",
    feeling: "好奇、期待 (Excited, Curious) 😋",
    opportunity: "扫码后直接进入免下载网页版（Web App），摄像头权限获取说明应当清晰明确，避免冗长授权阻碍用户。"
  },
  {
    step: "浏览与选择",
    stage: "阶段二：浏览商品大类并挑选心仪甜点",
    action: "在屏幕上上下滑动，切换不同的食物大类（甜品、主食、饮料、限定），查看菜品配图和价格。",
    feeling: "专注、愉悦 (Satisfied, Engaged) 🙂",
    opportunity: "海量餐品容易挑花眼，页面加载必须迅速。应提供便捷的“儿童专区”和“限定推荐”过滤功能。"
  },
  {
    step: "深度定制",
    stage: "阶段三：进行糖度、配料等细节客制化",
    action: "点击进入甜点详情页，根据喜好选择甜度（标准/减糖/无糖），添加配料（如鲜奶油、抹茶粉），然后选择套餐加入购物车。",
    feeling: "仔细、纠结 (Confident, Hopeful) 🤔",
    opportunity: "复杂的自定义会令人烦躁。应简化点选控件的面积，同时智能展示“常客推荐搭配”，减少盲目点选时间。"
  },
  {
    step: "支付方式",
    stage: "阶段四：确认购物车餐品并选择支付手段",
    action: "核对购物车中的商品及客制化备注。勾选可用的优惠券，并从列表里选择常用的电子支付方式（PayPay等）。",
    feeling: "放松、安全感 (Confident, Relaxed) 😌",
    opportunity: "日本无现金支付种类繁多，应将本国最流行的扫码和信用卡置于首屏，减少用户划屏寻找时间。"
  },
  {
    step: "确认与结账",
    stage: "阶段五：完成线上付款，在原座等待上餐",
    action: "确认最终价格。输入安全码或调用系统指纹支付，看到“支付成功”提示，订单自动发送至后厨。",
    feeling: "释怀、高效 (Pleased, Efficient) 🤩",
    opportunity: "极速付款。系统应自动记忆用户的常用卡号或支付方式，实现下次点餐“一键付款”。"
  }
];

const wireframeData = [
  {
    id: "01 Homepage",
    tabLabel: "01. 首页",
    title: "01 首页 (Homepage)",
    image: "/assets/Menu_App_img/wireframe/01 Homepage.png",
    details: {
      goals: [
        "直观、有吸引力地传达品牌形象和餐厅的整体世界观，帮助用户秒懂App的定位。",
        "显眼且明确地布置 **“AI 智能点餐”的入口**，减少用户的信息挑选负荷，顺滑引流。",
        "将“本日推荐”和“限时促销活动”合理平铺，提升用户的页面回游率和购买冲动。"
      ],
      logic: "将高对比度的品牌图片与AI点餐入口放置于首屏，迎合现代快节奏、懒人式的操作趋势。以左右滑动的卡片形式排版“季节限定”及“折扣信息”，既节省屏幕空间又让阅读极富节奏感。"
    }
  },
  {
    id: "02 Menu",
    tabLabel: "02. 菜单页",
    title: "02 菜单展示页 (Menu Page)",
    image: "/assets/Menu_App_img/wireframe/02 Menu.png",
    details: {
      goals: [
        "按餐品类别（甜点、主食、饮品、周边）进行清晰分类，使用户查找目标菜品更加快捷。",
        "在显著位置提供“季节限定”与“今日特惠”，向老客户推广新品。",
        "专设“儿童友好推荐 (Kids Menu)”，进一步提升亲子家庭就餐的便利度。"
      ],
      logic: "顶部的横向滚动分类条允许用户通过简单的单手滑动动作直接切换食物大类。独立出来的儿童餐分类块拥有独立的视觉标示，方便妈妈们快速筛选出少盐、少糖的无敏食物。"
    }
  },
  {
    id: "03 Detail",
    tabLabel: "03. 详情定制",
    title: "03 餐品定制详情页 (Product Detail)",
    image: "/assets/Menu_App_img/wireframe/03 Detail.png",
    details: {
      goals: [
        "多维度呈现餐品信息（高清图、食材配料、价格、过敏源警示）。",
        "提供便捷的客制化流程（如糖度选择：推荐、减糖、无糖；以及追加配料选项）。",
        "提供 **360° AR 真实度预览按钮**，让用户通过虚拟现实查看食物的分量与颜色。"
      ],
      logic: "将复杂的餐品自定义层级集中在一个弹出的定制抽屉中。甜度选择被设计成单选药丸按钮，避免用户在繁多的下拉选项中迷失。右下角实时汇总定制加料后的最终金额，避免最终付款时的心理落差。"
    }
  },
  {
    id: "05 Go to Cart",
    tabLabel: "04. 购物车弹窗",
    title: "04 购物车加购弹窗 (Add to Cart Modal)",
    image: "/assets/Menu_App_img/wireframe/05 Go to Cart.png",
    details: {
      goals: [
        "餐品加入购物车后立即给予轻量化反馈，使用户能清晰得知目前的状态。",
        "直接提供“去结算”与“继续选购”两个分流操作，极简跳转路径。",
        "通过“加购此餐品的人还买了”进行智能搭售推荐，提升餐厅客单价。"
      ],
      logic: "使用不遮挡全局的弹窗代替全屏跳转，防止打断用户顺畅的选菜过程。购物车卡片清晰陈列已选配料，方便结账前核对。"
    }
  },
  {
    id: "06 Order",
    tabLabel: "05. 结算页",
    title: "05 订单核对结算页 (Order Summary)",
    image: "/assets/Menu_App_img/wireframe/06 Order.png",
    details: {
      goals: [
        "清晰归拢选购清单，将客制化定制配料以标签形式展示在餐品下方。",
        "直观、显眼地呈现已扣除的优惠券数额，用醒目的大字展示实际支付总额。",
        "把“去支付”按钮置于底部最核心区域，完成支付导流。"
      ],
      logic: "扁平化核对层级，将购物车 and 价格计算放在同一视线轨道上。用户能清晰看到从总金额（如3,100円）扣除优惠券（-200円）得到最终付款额（2,900円）的过程，增强消费的安全感。"
    }
  },
  {
    id: "07 Pay",
    tabLabel: "06. 支付流",
    title: "06 收银与付款选择页 (Payment Details)",
    image: "/assets/Menu_App_img/wireframe/07 Pay.png",
    details: {
      goals: [
        "提供高度多元的付款接口，深度适应日本复杂的现金及电子支付市场。",
        "整合主流第三方移动扫码支付（PayPay, au Pay, 银联, 支付宝）以及非接触式交通卡支付。",
        "在核心区域提供“确认付款”和“取消订单”双向路径，提供误触退路。"
      ],
      logic: "考虑到国际游客在异国结账的繁琐性，除本地 PayPay 外，提供了高亮可视的 Visa/Mastercard 信用卡快捷注册。取消按钮位于主要动作按钮正下方，赋予用户掌控感，降低结账压迫感。"
    }
  },
  {
    id: "11 AI",
    tabLabel: "07. AI 智能点餐",
    title: "07 AI 智能对话点餐 (AI Ordering Chat)",
    image: "/assets/Menu_App_img/wireframe/11 AI.png",
    details: {
      goals: [
        "利用对话式UI极大地压缩挑选时间，降低用户的认知负荷。",
        "通过轻量级多选标签（如人数、有无儿童、想吃偏甜/偏淡等），快速定位需求。",
        "直接在聊天流卡片中输出智能生成的推荐套餐，并支持“一键加购”。"
      ],
      logic: "许多带小孩的父母不愿花费十几分钟去翻阅上百种菜品，该界面模拟真实店员的问答。系统检测到用户是家庭群体后，自动过滤并算出最佳套餐搭配。用户只需确认一下即可加入购物车结算，极大提升订餐效率。"
    }
  },
  {
    id: "12 Account",
    tabLabel: "08. 个人中心",
    title: "08 个人中心与多语言 (User Center & Account)",
    image: "/assets/Menu_App_img/wireframe/12 Account.png",
    details: {
      goals: [
        "提供一键切换界面的多语言选择器（中/英/日等），照顾海外游客群体。",
        "展示用户的会员等级以及点单历史，提供方便的“一键重新下单”入口。",
        "提供集中的支付卡包管理、心愿单，以及清晰可见的安全登出按钮。"
      ],
      logic: "将重复点餐的路径压缩至极致。个人中心的常用信用卡和常点甜品直接提供直达入口，减少老用户的点单操作次数。"
    }
  }
];

const usabilityStudies = [
  {
    num: 1,
    title: "分类过多导致选择困难",
    problem: "用户反馈菜单分类过多、各种甜品和主食混杂在一起，很难快速决定吃什么。对于带小孩的家长更是一场灾难。",
    solution: "引入了“AI 对话式智能点餐”。通过问答方式（几人用餐？有无儿童？偏爱甜口还是清淡？），系统会自动算出一套组合推荐，大大降低用户做决定的心智负担。"
  },
  {
    num: 2,
    title: "商品详情页难以返回",
    problem: "在进入复杂的加料定制详情页后，用户常找不到返回按钮，或者返回后购物车被清空，操作迷失感较强。",
    solution: "在所有详情页与定制面板顶部增加了全局固定的后退箭头与“返回菜单”文字悬浮按钮，并且在未下单时会自动缓存用户的加配选项。"
  },
  {
    num: 3,
    title: "支付结账流程繁琐冗长",
    problem: "原本付款需要在几个页面间跳转，且优惠券折抵并不直观，导致用户在结账前流失率较高。",
    solution: "全面整合并精简付款页面。将购物车总额、折扣抵扣明细与支付渠道整合为单页滚动界面，并实现一键“确认并付款”。"
  }
];

const hifiScreens = [
  {
    id: "01_Homepage",
    title: "01. 品牌首页",
    subtitle: "AI点餐入口与限定推荐",
    desc: "首屏搭载大面积的高颜值品牌海报以及极具诱惑力的“AI点餐入口”。下方放置季节限定，符合用户由大入深的信息获取逻辑。"
  },
  {
    id: "02_Menu",
    title: "02. 菜单列表",
    subtitle: "横向分类与亲子快捷过滤",
    desc: "重构分类导航，支持在横向滚动条中一键切换餐品分类。专设“儿童专区”，方便亲子家庭迅速匹配无香精、少糖餐品。"
  },
  {
    id: "03_Detail",
    title: "03. 配料定制",
    subtitle: "AR预览与实时金额汇总",
    desc: "将多余层级整合进弹性抽屉式详情。包含360°AR实体预览、甜度定制滑块以及加料金额的实时合计更新。"
  },
  {
    id: "05_Go to Cart",
    title: "04. 购物车弹层",
    subtitle: "满减优惠可视与智能加购",
    desc: "在点击加入购物车时提供浮窗式确认。通过文字提醒折扣“已折减”，同时通过‘常在一起购买’智能推送搭售推荐。"
  },
  {
    id: "06_Order",
    title: "05. 账单核对",
    subtitle: "扁平清晰的总额计算与明细",
    desc: "单页全景化账单。清晰划分商品小计、优惠抵扣数额及最终支付总额，规避传统长表单给用户带来的支付戒备心理。"
  },
  {
    id: "07_Pay",
    title: "06. 收银中心",
    subtitle: "主流扫码支付与信用卡融合",
    desc: "高度本土化的多支付网关界面。针对日本市场，整合了 PayPay, 信用卡, 交通卡 (Suica), Apple Pay 等多样化电子收银方式。"
  },
  {
    id: "11_AI注文 - chat1",
    title: "07. AI 助理 (Step 1)",
    subtitle: "对话式人机交互，发掘人数偏好",
    desc: "AI自动推荐模型。采用对答聊天形式快速获取就餐条件（如：Misaki有2个孩子），并推荐低糖、造型可爱的儿童套餐。"
  },
  {
    id: "11_AI注文 - chat2",
    title: "08. AI 推荐 (Step 2)",
    subtitle: "一键添加推荐套餐至购物车",
    desc: "AI给出量身匹配的餐品组合，用户可以在聊天流卡片中直接点击“一键加入购物车”，无需再次返回菜单搜索，极为高效。"
  }
];

const accessibilityConsiderations = [
  {
    title: "1. 清晰且一致的全局导航",
    desc: "整个应用贯彻统一的页面切换机制和规范的导航图标。即便有认知障碍或不熟悉智能手机的老人，也能快速通过图标意图和返回路径轻松使用。"
  },
  {
    title: "2. 高对比度与易读字形",
    desc: "界面字重及配色均严格契合 WCAG AA 级对比度规范。在白色或浅色背景上采用高深度对比字，避免过细字体，这对于有轻度视觉损害或色盲的群体尤为友好。"
  },
  {
    title: "3. 兼容多样化的输入场景",
    desc: "系统除传统手指点按外，还为手部活动不便或有运动障碍的顾客预留了 AI 语音辅助输入和简易划块。多入口并行让所有人都能舒适点单。"
  }
];

function BackArrow() {
  return (
    <span className="relative h-3 w-6" aria-hidden="true">
      <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-3 origin-left -translate-y-1/2 rotate-[-35deg] bg-current" />
    </span>
  );
}

function FloatingBackToWork() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const anchor = document.getElementById("top-back-to-work");
    if (!anchor) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/work"
      className={`fixed bottom-7 left-7 z-40 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition duration-300 hover:text-black lg:inline-flex ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      data-cursor="button"
    >
      <BackArrow />
      返回列表
    </Link>
  );
}

function CaseNav() {
  const [active, setActive] = useState("overview");

  const handleClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    navItems.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden self-start lg:sticky lg:top-[7.5rem] lg:block">
      <nav aria-label="Case study navigation" className="w-44">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">案例研究目录</p>
        <div className="mt-7 space-y-1">
          {navItems.map(([id, label], index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleClick(id)}
              className={`flex items-center gap-3 border-l py-2 pl-4 text-xs font-semibold transition-colors ${
                active === id
                  ? "border-tomato text-tomato"
                  : "border-black/10 text-neutral-400 hover:border-black/25 hover:text-[#171512]"
              }`}
              data-cursor="button"
            >
              <span className="w-5 text-[0.68rem] text-current/55">{String(index + 1).padStart(2, "0")}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <motion.section {...fadeUp} id={id} className="scroll-mt-28 pb-16">
      <div className="flex items-center gap-6">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-tomato">{eyebrow}</p>
        <span className="h-px flex-1 bg-black/10" aria-hidden="true" />
      </div>
      <h2 className="mt-6 max-w-3xl font-barlow text-[clamp(1.35rem,2.6vw,2.4rem)] font-semibold leading-[1.1]">
        {title}
      </h2>
      <div className="mt-9">{children}</div>
    </motion.section>
  );
}

export function CreatingUXPortfolio() {
  const [journeyIdx, setJourneyIdx] = useState(0);
  const [wireframeIdx, setWireframeIdx] = useState(0);
  const [selectedScreenId, setSelectedScreenId] = useState("01_Homepage");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const selectedWf = wireframeData[wireframeIdx];
  const selectedHifi = hifiScreens.find((s) => s.id === selectedScreenId) || hifiScreens[0];

  return (
    <main className="bg-[#fbfaf8] text-[#171512]">
      {/* Hero Section */}
      <section className="px-5 pb-20 pt-32 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            id="top-back-to-work"
            href="/work"
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-black"
            data-cursor="button"
          >
            <BackArrow />
            返回列表
          </Link>

          <motion.div {...fadeUp} className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="mt-10 max-w-4xl font-barlow text-[clamp(1.8rem,3.6vw,3.8rem)] font-semibold leading-[1.05] tracking-normal">
                Leung&apos;s Honey House
                <span className="block text-neutral-400 text-[clamp(1.2rem,2.2vw,2.4rem)] mt-4">
                  日式餐饮与甜品店移动点餐与无现金支付系统设计
                </span>
              </h1>
              <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-600">
                本案例旨在为追求品质就餐的顾客打造极致顺滑的移动端点餐体验。方案引入 AI
                个性化问答推荐，并彻底简化日本传统餐厅繁复的加配料流程与收银闭环，高度契合无现金化的大趋势。
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#mockups"
                  className="inline-flex min-h-12 items-center rounded-full bg-[#171512] px-6 text-sm font-bold text-white transition hover:bg-tomato"
                  data-cursor="button"
                >
                  体验高保真原型
                </a>
                <a
                  href="#overview"
                  className="inline-flex min-h-12 items-center rounded-full border border-black/15 px-6 text-sm font-bold text-[#171512] transition hover:border-tomato hover:text-tomato"
                  data-cursor="button"
                >
                  探索项目逻辑
                </a>
              </div>

              <dl className="mt-14 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-3">
                {[
                  ["项目时长", "2025.02.20 - 03.20"],
                  ["独立角色", "独立 UX 设计师 / 策划"],
                  ["职责范围", "用户研究 / 信息架构 / 线稿绘制 / 交互设计 / 模拟器高保真原型 / 可用性测试"]
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-bold uppercase tracking-[0.26em] text-[#171512]">{label}</dt>
                    <dd className="mt-5 text-sm leading-6 text-neutral-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex justify-center lg:justify-end">
              <video
                className="max-h-[34rem] w-full max-w-[20rem] object-contain rounded-lg border border-black/5 shadow-2xl"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                src={assetPath(
                  "/assets/Menu_App_img/Design a menu & payment app and a responsive website for a Japanese restaurant.MOV"
                )}
              >
                您的浏览器不支持视频。
              </video>
            </div>
          </motion.div>

          <motion.figure {...fadeUp} className="mt-20 overflow-hidden rounded-sm border border-black/10">
            <img
              src={assetPath("/assets/Menu_App_img.png")}
              alt="Leung's Honey House case study preview image showing mobile phone mockups"
              className="block h-auto w-full"
            />
          </motion.figure>
        </div>
      </section>

      <FloatingBackToWork />

      {/* Main Container */}
      <div className="px-5 pb-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] xl:gap-10">
          <CaseNav />

          <div className="space-y-16">
            {/* Section 1: Overview */}
            <Section id="overview" eyebrow="01. 项目概述" title="移动点餐，智荐无感">
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-sm border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-tomato mb-4">📱 关于产品</h3>
                  <p className="text-sm leading-7 text-neutral-600">
                    这是一款为日本餐饮与甜品店打造的移动端点餐与无现金支付系统。主要针对日益增长的外国游客及家庭顾客需求，通过
                    AI 智能推荐、多语言菜单支持以及多元无现金电子收银，缩短下单决策并免除排队焦虑。
                  </p>
                </article>

                <article className="rounded-sm border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-tomato mb-4">🎯 设计目标</h3>
                  <p className="text-sm leading-7 text-neutral-600">
                    为追求品质的就餐顾客提供无缝、便捷的端到端点餐体验。重点简化菜单复杂分类层次、将繁琐的多级定制参数化，并打通主流扫码/卡片支付的闭环。
                  </p>
                </article>

                <article className="rounded-sm border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-[#e76f51] mb-4">⚠️ 痛点发现</h3>
                  <p className="text-sm leading-7 text-neutral-600">
                    顾客在用餐时常面临日本传统商铺仅支持现金、多语种菜单缺失导致语言不通、复杂的甜度与加配料选项操作不易，以及菜单层级划分过深导致查找疲劳。
                  </p>
                </article>

                <article className="rounded-sm border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-tomato mb-4">⚙️ 解决方案</h3>
                  <p className="text-sm leading-7 text-neutral-600">
                    利用轻量化面包屑分类条让用户一键切换类别，采用多入口 AI 对话发掘就餐限制并智能组合推荐，将加料汇总并展示在底部账单，提高订单准确率。
                  </p>
                </article>
              </div>
            </Section>

            {/* Section 2: Research */}
            <Section id="research" eyebrow="02. 用户研究" title="以研究切入，从视觉导向转为信息解构">
              <div className="rounded-sm border border-black/10 bg-white p-8 mb-10 shadow-sm">
                <h3 className="text-base font-bold mb-4 flex items-center gap-3">
                  <span className="text-tomato">📋</span> 用户研究总结
                </h3>
                <p className="text-sm leading-8 text-neutral-600">
                  最初我推测用户最看重界面美感和餐品丰富度。然而研究证实，用户痛点集中在
                  <strong>“加料流程难用、菜单分类混乱、缺乏多语言、必须使用现金结账”</strong>
                  上。多级操作常造成焦虑，许多用户希望减少决策干扰。据此我精简了非核心定制，将注意力放在了 AI 推荐与结算效率上。
                </p>
              </div>

              <h4 className="text-sm font-bold tracking-wider text-neutral-500 uppercase mb-6">核心痛点挖掘</h4>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {painPoints.map((p) => (
                  <article
                    key={p.num}
                    className="rounded-sm border border-black/10 bg-white p-6 relative transition hover:border-tomato hover:-translate-y-1"
                  >
                    <span className="absolute top-4 right-4 text-3xl font-extrabold text-black/5">{p.num}</span>
                    <h5 className="text-base font-bold text-[#171512] mb-1">{p.title}</h5>
                    <p className="text-[10px] font-semibold text-tomato uppercase tracking-wider mb-4 italic font-jp">
                      {p.descJp}
                    </p>
                    <p className="text-xs leading-6 text-neutral-600">{p.desc}</p>
                  </article>
                ))}
              </div>

              {/* Persona 田中美咲 */}
              <div className="mt-12 rounded-lg border border-black/10 bg-white overflow-hidden shadow-sm">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="bg-[#f5eeeb] p-8 flex flex-col items-center text-center border-r border-black/10">
                    <img
                      src={assetPath("/assets/Menu_App_img/persona/Tanaka.jpeg")}
                      alt="Misaki Tanaka avatar"
                      className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md mb-6"
                    />
                    <h5 className="text-lg font-bold text-[#171512]">Misaki Tanaka (田中美咲)</h5>
                    <p className="text-xs text-tomato font-bold uppercase tracking-[0.2em] mt-2">典型用户画像</p>
                    <p className="text-xs italic text-neutral-600 mt-6 leading-6 relative px-4">
                      “我想和孩子们一起享受美味甜点，共同创造美好的回忆。”
                    </p>
                    <ul className="w-full text-left text-xs border-t border-black/5 mt-8 pt-4 space-y-2 text-neutral-500">
                      <li>
                        <strong>年龄：</strong>35 岁
                      </li>
                      <li>
                        <strong>学历：</strong>学士学位
                      </li>
                      <li>
                        <strong>家庭：</strong>已婚，育有两个孩子 (5岁和8岁)
                      </li>
                      <li>
                        <strong>职业：</strong>兼职员工 & 全职妈妈
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="border-l-4 border-tomato bg-[#fbfaf8] p-5 rounded-r">
                      <h6 className="text-xs font-bold text-tomato uppercase tracking-wider mb-2">
                        问题陈述 (Problem Statement)
                      </h6>
                      <p className="text-sm leading-7 text-neutral-700">
                        Misaki Tanaka 是一位经常带两个幼童外出的忙碌母亲。她急需一个
                        <strong>对儿童友好、导航清晰且配有智能 AI 推荐的数字化点餐界面</strong>
                        ，因为孩子们常因看不懂复杂的菜单而感到烦躁，这使得点餐过程耗时且极具压力。
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h6 className="text-xs font-bold text-[#81b29a] uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span>🌟</span> 核心目标
                        </h6>
                        <ul className="text-xs leading-6 text-neutral-600 space-y-2 list-disc pl-4">
                          <li>在亲子友好的甜点咖啡厅享受惬意的高品质亲子时光。</li>
                          <li>寻找一个零压力的简易点餐方式，使孩子们也能轻松参与。</li>
                          <li>通过积分会员计划获取折扣与常客优惠回馈。</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="text-xs font-bold text-tomato uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span>❌</span> 核心挫折
                        </h6>
                        <ul className="text-xs leading-6 text-neutral-600 space-y-2 list-disc pl-4">
                          <li>复杂的加配料详情选择使得孩子们选择困难、容易哭闹。</li>
                          <li>漫长的排队等待时间容易让年幼的孩子失去耐心。</li>
                          <li>店内非现金结账网关支持有限，结账携带大量零钱极其不便。</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 3: Journey */}
            <Section id="journey" eyebrow="03. 体验旅程" title="梳理全景就餐路径，精准捕捉优化断点">
              <p className="text-sm text-neutral-500 mb-8 leading-6">
                以 Persona Misaki Tanaka 的旅程为例，我们梳理了从桌上扫码到收银上餐的 5 个关键触点，以定位设计机会：
              </p>

              <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                {/* Steps Switcher Tabs */}
                <div className="grid grid-cols-5 gap-2 border-b border-black/10 pb-4 mb-6">
                  {journeySteps.map((step, idx) => (
                    <button
                      key={step.step}
                      onClick={() => setJourneyIdx(idx)}
                      className={`py-3 px-1 text-center rounded flex flex-col items-center gap-2 transition ${
                        journeyIdx === idx
                          ? "bg-tomato/5 text-tomato font-bold"
                          : "text-neutral-400 hover:text-neutral-600"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          journeyIdx === idx ? "bg-tomato text-white" : "bg-neutral-100 text-neutral-500"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-xs md:text-sm hidden sm:inline">{step.step}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Step Display */}
                {journeySteps.map(
                  (step, idx) =>
                    journeyIdx === idx && (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] bg-tomato/10 text-tomato px-2.5 py-1 rounded">
                          {step.stage}
                        </span>
                        <h4 className="text-lg font-bold">{step.step}</h4>

                        <div className="grid gap-6 md:grid-cols-3">
                          <div className="border-t border-black/10 pt-4">
                            <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                              用户行为 (Action)
                            </h5>
                            <p className="text-xs leading-6 text-neutral-600">{step.action}</p>
                          </div>
                          <div className="border-t border-black/10 pt-4">
                            <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                              用户情绪 (Emotion)
                            </h5>
                            <p className="text-xs leading-6 text-neutral-600">{step.feeling}</p>
                          </div>
                          <div className="border-t border-black/10 pt-4">
                            <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                              优化契机 (Opportunities)
                            </h5>
                            <p className="text-xs leading-6 text-tomato font-semibold">{step.opportunity}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </div>
            </Section>

            {/* Section 4: Wireframes */}
            <Section id="wireframes" eyebrow="04. 设计线稿" title="纸面探索与低保真数字原型的论证">
              <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center mb-12 border-b border-black/10 pb-12">
                <div>
                  <h4 className="text-lg font-bold mb-4">手绘设计草图 (Paper Wireframes)</h4>
                  <p className="text-sm leading-8 text-neutral-600">
                    在正式投入高保真界面渲染前，我习惯采用铅笔手稿对不同界面的信息布局、层级关系及触控按钮比例进行多轮草拟。这能帮助我们极低成本地筛选掉不合理的页面分流逻辑，确保系统整体架构足够清爽。
                  </p>
                </div>
                <div
                  onClick={() => setLightboxImg("/assets/Menu_App_img/Paper wireframes.jpeg")}
                  className="group relative cursor-zoom-in rounded overflow-hidden border border-black/10 bg-[#f4f2ef] p-3 shadow-md"
                >
                  <img
                    src={assetPath("/assets/Menu_App_img/Paper wireframes.jpeg")}
                    alt="Paper wireframes design draft"
                    className="w-full h-auto object-cover max-h-56"
                  />
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition">
                    🔍 点击放大查看
                  </div>
                </div>
              </div>

              {/* Digital Wireframes Explorer */}
              <h4 className="text-sm font-bold tracking-wider text-neutral-500 uppercase mb-6">
                数字化低保真线稿 (Digital Wireframes)
              </h4>
              <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <div className="grid md:grid-cols-[160px_1fr] gap-8">
                  {/* Left Tabs */}
                  <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-black/10 pb-4 md:pb-0 md:pr-4">
                    {wireframeData.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setWireframeIdx(idx)}
                        className={`py-2 px-3 text-left rounded text-xs font-bold transition whitespace-nowrap md:whitespace-normal ${
                          wireframeIdx === idx ? "bg-tomato/5 text-tomato" : "text-neutral-400 hover:text-neutral-600"
                        }`}
                      >
                        {item.tabLabel}
                      </button>
                    ))}
                  </div>

                  {/* Right Display Panel */}
                  <div className="grid sm:grid-cols-[160px_1fr] gap-6 items-start">
                    <div
                      onClick={() => setLightboxImg(selectedWf.image)}
                      className="group relative cursor-zoom-in rounded overflow-hidden bg-[#f4f2ef] p-3 border border-black/5 mx-auto max-w-[150px]"
                    >
                      <img
                        src={assetPath(selectedWf.image)}
                        alt={selectedWf.title}
                        className="w-full h-auto object-contain max-h-64"
                      />
                      <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition">
                        放大
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="text-sm font-extrabold text-tomato">{selectedWf.title}</h5>
                      <div className="space-y-3">
                        <h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">设计目标</h6>
                        <ul className="text-xs leading-6 text-neutral-600 space-y-2 list-disc pl-4">
                          {selectedWf.details.goals.map((goal, gIdx) => (
                            <li key={gIdx} className="pl-1">
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-black/5 pt-3">
                        <h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                          思考逻辑
                        </h6>
                        <p className="text-xs leading-6 text-neutral-500">{selectedWf.details.logic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 5: Usability */}
            <Section id="usability" eyebrow="05. 可用性测试" title="从低保真伴随测试中挖掘的三大改动">
              <p className="text-sm text-neutral-500 mb-8 leading-6">
                我针对初版原型进行了第一轮可用性测试，邀请了 5 位目标用户画像代表，整理出影响下单结账流失的核心问题：
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {usabilityStudies.map((u) => (
                  <article
                    key={u.num}
                    className="rounded-sm border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-tomato text-white px-2 py-0.5 rounded-sm mb-4">
                      问题 {u.num}
                    </span>
                    <h5 className="text-sm font-bold text-[#171512] mb-3">{u.title}</h5>
                    <p className="text-xs leading-6 text-neutral-600 mb-6 border-b border-black/5 pb-4">{u.problem}</p>
                    <h6 className="text-[10px] font-bold text-[#81b29a] uppercase tracking-wider mb-2">
                      ✅ 迭代改进：
                    </h6>
                    <p className="text-xs leading-6 text-neutral-500 font-semibold">{u.solution}</p>
                  </article>
                ))}
              </div>
            </Section>

            {/* Section 6: Mockups */}
            <Section id="mockups" eyebrow="06. 高保真原型" title="iPhone 16 Pro 仿真交互模拟器">
              <p className="text-sm text-neutral-500 mb-8 leading-6">
                以下为最终的交互原型。您可以通过点击右侧控制面板中的选项，在左侧的手机模型中无缝切换预览高保真页面：
              </p>

              <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] items-center rounded-lg border border-black/10 bg-[#faf9f6] p-8 shadow-inner">
                {/* CSS iPhone Frame */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[260px] aspect-[9/18.5] rounded-[42px] border-[10px] border-[#222] bg-[#111] shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden">
                    {/* Speaker and Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                      <span className="w-8 h-1 bg-neutral-800 rounded-full" />
                    </div>
                    {/* Screen content */}
                    <div className="w-full h-full relative overflow-hidden rounded-[32px] bg-white">
                      <img
                        src={assetPath(`/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/${selectedScreenId}.png`)}
                        alt="High-fidelity mockup on iPhone simulator"
                        className="w-full h-full object-cover transition-opacity duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Simulator Controls list */}
                <div className="space-y-2.5 max-h-[30rem] overflow-y-auto pr-2 custom-scrollbar">
                  {hifiScreens.map((screen) => (
                    <button
                      key={screen.id}
                      onClick={() => setSelectedScreenId(screen.id)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all flex gap-4 items-start ${
                        selectedScreenId === screen.id
                          ? "bg-white border-tomato shadow-md"
                          : "bg-white/40 border-black/5 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                          selectedScreenId === screen.id ? "bg-tomato text-white" : "bg-neutral-100 text-neutral-500"
                        }`}
                      >
                        {hifiScreens.indexOf(screen) + 1}
                      </span>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-[#171512]">{screen.title}</h5>
                        <p className="text-[10px] font-semibold text-tomato uppercase tracking-wider mb-1">
                          {screen.subtitle}
                        </p>
                        {selectedScreenId === screen.id && (
                          <p className="text-[10px] leading-5 text-neutral-500 mt-2 border-t border-black/5 pt-2">
                            {screen.desc}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Section>

            {/* Section 7: Video */}
            <Section id="video-walkthrough" eyebrow="07. 原型演示" title="端到端订餐流程视频录屏演示">
              <p className="text-sm text-neutral-500 mb-8 leading-6">
                下面的实机录制清晰展示了从桌上扫码、滑块加配、查看购物车折扣直至智能 AI
                对话下单推荐套餐的完整操作逻辑及动效过渡：
              </p>

              <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-black/10 bg-black shadow-lg">
                <video
                  controls
                  muted
                  preload="metadata"
                  className="w-full h-full object-contain"
                  poster={assetPath("/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/01_Homepage.png")}
                >
                  <source
                    src={assetPath(
                      "/assets/Menu_App_img/Design a menu & payment app and a responsive website for a Japanese restaurant.MOV"
                    )}
                    type="video/mp4"
                  />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </Section>

            {/* Section 8: Accessibility */}
            <Section id="accessibility" eyebrow="08. 无障碍设计" title="坚持平等访问，构建暖心的无门槛点单">
              <div className="grid gap-6 md:grid-cols-3">
                {accessibilityConsiderations.map((a, idx) => (
                  <article
                    key={idx}
                    className="rounded-sm border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <span className="text-2xl mb-4 block">♿</span>
                    <h5 className="text-sm font-bold text-[#171512] mb-3">{a.title}</h5>
                    <p className="text-xs leading-6 text-neutral-600">{a.desc}</p>
                  </article>
                ))}
              </div>
            </Section>

            {/* Section 9: Reflection */}
            <Section id="reflection" eyebrow="09. 反思与展望" title="在每一次微小触点中寻找减法的意义">
              <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
                <div>
                  <h4 className="text-base font-bold text-tomato mb-4">成效与收获</h4>
                  <p className="text-sm leading-8 text-neutral-600">
                    Leung&apos;s Honey House
                    移动点餐方案的核心突破点在于聚焦就餐焦虑，利用对话机器人完成了传统菜单的结构化降维。事实证明，适度的AI推荐机制不仅能把平均餐品发现时间压缩一大半，更能为带孩父母释放巨大的等待心理压力。
                  </p>
                  <p className="text-sm leading-8 text-neutral-600 mt-4 font-semibold text-tomato">
                    “好设计并不取决于炫目的堆叠，而在于深切共情后针对性的删减。”
                  </p>
                </div>
                <aside className="rounded border-l-2 border-tomato bg-white p-6 shadow-sm">
                  <h5 className="text-xs font-bold text-tomato uppercase tracking-wider mb-4">下一步迭代方向</h5>
                  <ul className="text-xs leading-6 text-neutral-600 space-y-3 pl-4 list-decimal">
                    <li>
                      <strong>AI 语音流降噪：</strong>优化杂乱噪声环境下的语音识别，便于方言障碍人士。
                    </li>
                    <li>
                      <strong>响应式自适应提升：</strong>进行各种异形屏与微信内置浏览器的排版高缩放渲染测试。
                    </li>
                    <li>
                      <strong>多国籍可用性测试：</strong>进行面向欧美/东南亚游客的盲测，验证国际化定制理解度。
                    </li>
                  </ul>
                </aside>
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5 cursor-zoom-out"
        >
          <span className="absolute top-5 right-5 text-white text-4xl leading-none">&times;</span>
          <img
            src={assetPath(lightboxImg)}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      )}
    </main>
  );
}
