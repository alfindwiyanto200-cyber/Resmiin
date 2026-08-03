import React from 'react';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs, getImageUrl } from '@/lib/articles';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan – Resmiin',
    };
  }

  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;

  return {
    title: `${title} – Resmiin`,
    description: description ?? undefined,
    openGraph: {
      title: article.ogTitle || title,
      description: article.ogDescription || description || undefined,
      images: article.ogImage ? [article.ogImage] : article.featuredImage ? [article.featuredImage] : [],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Parse FAQ list from schemaMarkup
  let faqItems: { question: string; answer: string }[] = [];
  if (article.schemaMarkup) {
    try {
      const parsed = JSON.parse(article.schemaMarkup);
      const schemas = Array.isArray(parsed) ? parsed : [parsed];
      const faqSchema = schemas.find((s: any) => s && s['@type'] === 'FAQPage');
      if (faqSchema && Array.isArray(faqSchema.mainEntity)) {
        faqItems = faqSchema.mainEntity.map((item: any) => ({
          question: item.name || '',
          answer: item.acceptedAnswer?.text || ''
        })).filter((item: any) => item.question && item.answer);
      }
    } catch (e) {
      console.error('Failed to parse FAQ schema', e);
    }
  }

  const coverUrl = getImageUrl(article.featuredImage);
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    : '2025-11-05';
  const authorName = article.author?.name || 'Tim Hukum Resmiin';

  return (
    <article className="article-page" style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* HEADER META */}
      <header className="article-header" style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px 20px' }}>
        <div className="article-meta-top" style={{ fontSize: '13px', fontWeight: 700, color: '#1565C0', marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>Oleh {authorName}</span>
        </div>
        <h1 className="article-h1" style={{ fontSize: '42px', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2, marginBottom: '24px' }}>
          {article.title}
        </h1>
      </header>

      {/* FEATURED BANNER IMAGE */}
      <div className="article-hero-wrap" style={{ maxWidth: '920px', margin: '0 auto 40px', padding: '0 24px' }}>
        <img
          src={coverUrl}
          alt={article.title}
          style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.08)', objectFit: 'cover' }}
        />
      </div>

      {/* SHARE TOOLBAR */}
      <div className="article-share-bar" style={{ maxWidth: '760px', margin: '0 auto 40px', padding: '0 24px 20px', borderBottom: '1px solid #EAEEF4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#637B96' }}>
        <div>Kategori: <strong style={{ color: '#0D1B2A' }}>{article.category?.name || 'LEGALITAS BISNIS'}</strong></div>
      </div>

      {/* BODY CONTENT */}
      <main className="article-body" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px 60px', fontSize: '17px', lineHeight: 1.7, color: '#2C4360' }}>
        {article.content ? (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose-content"
            />
            <style>{`
              .prose-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 28px 0;
                font-size: 15px;
                text-align: left;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
              }
              .prose-content th {
                background-color: #f1f5f9;
                color: #0f172a;
                font-weight: 700;
                padding: 14px 16px;
                border-bottom: 2px solid #cbd5e1;
                border-right: 1px solid #e2e8f0;
              }
              .prose-content td {
                padding: 14px 16px;
                border-bottom: 1px solid #e2e8f0;
                border-right: 1px solid #e2e8f0;
                color: #334155;
                vertical-align: middle;
              }
              .prose-content tr:nth-child(even) {
                background-color: #f8fafc;
              }
              .prose-content tr:hover {
                background-color: #f1f5f9;
              }
              .prose-content th:last-child,
              .prose-content td:last-child {
                border-right: none;
              }
              .prose-content p {
                margin-bottom: 20px;
              }
              .prose-content h2 {
                font-size: 24px;
                font-weight: 800;
                color: #0d1b2d;
                margin-top: 36px;
                margin-bottom: 16px;
              }
              .prose-content h3 {
                font-size: 20px;
                font-weight: 700;
                color: #0d1b2d;
                margin-top: 28px;
                margin-bottom: 12px;
              }
              .prose-content ul, .prose-content ol {
                margin-bottom: 20px;
                padding-left: 24px;
              }
              .prose-content li {
                margin-bottom: 8px;
              }
            `}</style>
          </>
        ) : (
          <p style={{ marginBottom: '20px' }}>{article.excerpt}</p>
        )}
      </main>

      {/* FAQ VISUAL ACCORDION */}
      {faqItems.length > 0 && (
        <section className="article-faq" style={{ maxWidth: '760px', margin: '0 auto 60px', padding: '0 24px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0D1B2A', marginBottom: '24px', borderBottom: '2px solid #EAEEF4', paddingBottom: '12px' }}>
            Pertanyaan Sering Diajukan (FAQ)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqItems.map((faq: any, index: number) => (
              <details key={index} className="faq-item" style={{
                background: '#F5F7FA',
                border: '1px solid #EAEEF4',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '16px', fontWeight: 800, color: '#0D1B2A', outline: 'none', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{faq.question}</span>
                  <span style={{ color: '#1565C0', fontSize: '18px' }}>+</span>
                </summary>
                <p style={{ marginTop: '12px', fontSize: '15px', color: '#637B96', lineHeight: 1.6, margin: '12px 0 0', cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Schema JSON-LD Script Injection */}
      {article.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: article.schemaMarkup }}
        />
      )}

      {/* AUTHOR BOX */}
      <div style={{ maxWidth: '760px', margin: '0 auto 60px', padding: '0 24px' }}>
        <div style={{ background: '#F5F7FA', border: '1px solid #EAEEF4', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1565C0', color: '#fff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
            {authorName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0D1B2A', margin: 0 }}>Ditulis oleh {authorName}</h4>
            <p style={{ fontSize: '13px', color: '#637B96', margin: '4px 0 0' }}>Mitra terpercaya legalitas dan infrastruktur bisnis Indonesia. Membantu lebih dari 2.500+ perusahaan tumbuh berkelanjutan.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
