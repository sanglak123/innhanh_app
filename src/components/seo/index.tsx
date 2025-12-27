// components/Seo.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    noIndex?: boolean;
    structuredData?: object; // Schema.org dạng JSON-LD
    canonical?: string;
}

const SEO = ({
    title,
    description,
    keywords,
    image,
    noIndex = false,
    structuredData,
    canonical
}: SeoProps) => {
    const router = useRouter();

    // Tự động tạo canonical từ router.asPath
    const canonicalUrl = canonical || `https://innhanh79.vn${router.asPath.split('?')[0]}`;

    // Open Graph default image
    const ogImage = image || getOgImageByPath(router.pathname);

    return (
        <Head>
            {/* Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noIndex && <meta name="robots" content="noindex" />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            )}
        </Head>
    );
};

// Gán ảnh Open Graph theo path (nếu muốn dùng auto)
const getOgImageByPath = (path: string) => {
    const cleanPath = path.split('?')[0].replace(/\/$/, ''); // loại dấu / cuối

    const mapping: { [key: string]: string } = {
        '': '/og/home.jpg',
        '/': '/og/home.jpg',
        '/in-nhanh': '/og/in-nhanh.jpg',
        '/in-quang-cao': '/og/in-quang-cao.jpg',
        '/in-ban-ve': '/og/in-ban-ve.jpg',
        '/design': '/og/design.jpg',
        '/about': '/og/about.jpg',
        '/phuong-thuc-thanh-toan': '/og/payment.jpg',
        '/thoa-thuan-chinh-sach': '/og/policy.jpg',
    };

    return mapping[cleanPath] || '/og/default.jpg';
};


export default SEO;