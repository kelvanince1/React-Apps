import Link from 'next/link';

import Image from '../components/Image';

const About = () => (
    <div style={{ fontSize: '20px', color: 'blue' }}>
        <h1>About page</h1>
        <Link href='/'><button>Back</button></Link>
        <Image />
        <p>Previously a magician</p>
    </div>
);

export default About;