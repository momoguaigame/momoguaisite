import Head from 'next/head'
import styles from '../styles/index.module.css'


function Card({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}


export default function HomePage() {
  const cards = [
    { title: "卡片 1", desc: "这是一些描述内容，介绍卡片的信息。" },
    { title: "卡片 2", desc: "这是一些描述内容，介绍卡片的信息。" },
    { title: "卡片 3", desc: "这是一些描述内容，介绍卡片的信息。" },
    { title: "卡片 4", desc: "这是一些描述内容，介绍卡片的信息。" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">展示卡片页面</h1>
        <p className="text-gray-600">一个简单、优雅的卡片展示布局</p>
      </div>

      {/* 一排4个卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <Card key={i} title={c.title} desc={c.desc} />
        ))}
      </div>
    </main>
  );
}
