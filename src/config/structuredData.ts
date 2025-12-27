const structuredData_home = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'In Nhanh 79',
    'url': 'https://innhanh79.vn',
    'logo': 'https://innhanh79.vn/img/logo/logo.png',
    'description': 'In Nhanh 79 chuyên in ấn kỹ thuật số, in nhanh, in quảng cáo, thiết kế tại TP.HCM.',
    'sameAs': ['https://www.facebook.com/inhanh79']
};
const structuredData_payments = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Phuong Thuc Thanh Toan',
    'url': 'https://innhanh79.vn/phuong-thuc-thanh-toan',
    'description': 'Thông tin về phuong thuc thanh toan tại In Nhanh 79.'
};
const structuredData_in_nhanh = {
    '@context': 'https://schema.org',
    '@type': 'Service', 'name': 'In Nhanh',
    'url': 'https://innhanh79.vn/in-nhanh',
    'provider': {
        '@type': 'Organization',
        'name': 'In Nhanh 79',
        'url': 'https://innhanh79.vn'
    },
    'serviceType': 'Dịch vụ in ấn',
    'areaServed': {
        '@type': 'Place',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'TP.HCM',
            'addressCountry': 'VN'
        }
    },
    'description': 'Dịch vụ in ấn chuyên nghiệp, lấy nhanh, giao tận nơi.'
};
const structuredData_Policy = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Thoa Thuan Chinh Sach',
    'url': 'https://innhanh79.vn/thoa-thuan-chinh-sach',
    'description': 'Thông tin về thỏa thuận và chính sách tại In Nhanh 79.'
};
const structuredData_about = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'About',
    'url': 'https://innhanh79.vn/about',
    'logo': 'https://innhanh79.vn/img/logo/logo.png',
    'description': 'In Nhanh 79 là đơn vị in ấn kỹ thuật số chuyên nghiệp tại TP.HCM.',
    'sameAs': ['https://www.facebook.com/inhanh79']
};
const structuredData_in_ban_ve = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'In Ban Ve',
    'url': 'https://innhanh79.vn/in-ban-ve',
    'provider': {
        '@type': 'Organization',
        'name': 'In Nhanh 79',
        'url': 'https://innhanh79.vn'
    },
    'serviceType': 'Dịch vụ in ấn bản vẽ A4 - A0',
    'areaServed': {
        '@type': 'Place',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'TP.HCM',
            'addressCountry': 'VN'
        }
    },
    'description': 'Dịch vụ in ấn bản vẽ A4 - A0 chuyên nghiệp, lấy nhanh, giao tận nơi.'
};
const structuredData_in_quang_cao = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'In Quang Cao',
    'url': 'https://innhanh79.vn/in-quang-cao',
    'provider': {
        '@type': 'Organization',
        'name': 'In Nhanh 79',
        'url': 'https://innhanh79.vn'
    },
    'serviceType': 'Dịch vụ in ấn',
    'areaServed': {
        '@type': 'Place',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'TP.HCM',
            'addressCountry': 'VN'
        }
    },
    'description': 'Dịch vụ in ấn chuyên nghiệp, lấy nhanh, giao tận nơi.'
};
const structuredData_design = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Thiết Kế In Ấn",
    "provider": {
        "@type": "Organization",
        "name": "In Nhanh 79",
        "url": "https://innhanh79.vn",
        "logo": "https://innhanh79.vn/img/logo/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84-888-229-079",
            "contactType": "Customer Service"
        }
    },
    "areaServed": {
        "@type": "Place",
        "name": "TP.HCM, Việt Nam"
    },
    "availableChannel": {
        "@type": "ServiceChannel",
        "serviceLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "TP.HCM",
                "addressCountry": "VN"
            }
        }
    },
    "url": "https://innhanh79.vn/design",
    "description": "Thiết kế in ấn chuyên nghiệp: bao bì, catalogue, brochure, tem nhãn, tờ rơi - đảm bảo đúng kích thước và màu sắc tiêu chuẩn in."
}

export {
    structuredData_home,
    structuredData_payments,
    structuredData_Policy,
    structuredData_in_nhanh,
    structuredData_about,
    structuredData_in_ban_ve,
    structuredData_in_quang_cao,
    structuredData_design
};