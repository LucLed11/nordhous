import './logo.css'

const Logo= () => {
    const src= 'https://d2r9epyceweg5n.cloudfront.net/stores/001/101/904/themes/style/1-slide-1592509648026-3799251770-2255e10bcb1a3545ac26b3e74d16ec2c1592509648-480-0.webp?540544885'

    return (
        <picture>
            <img src={src} className="color" alt='logo' />
        </picture>
    )
}

export default Logo