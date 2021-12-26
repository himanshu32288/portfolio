import './Intro.css'
import Me from '../../img/pp.png'
const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="intro-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hello,My name is</h2>
                        <h1 className='i-name'>Himanshu Kumar</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Devloper</div>
                                <div className="i-title-item">Virtual Reality Beginner</div>
                                <div className="i-title-item">UI/UX Designer</div>
                                <div className="i-title-item">DSA</div>

                            </div>
                        </div>
                        <p className="i-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam fugit aut necessitatibus exercitationem eligendi velit facere explicabo molestiae voluptate repellat, sit cupiditate minima, inventore odit ut dicta! Repellendus, eius.
                        </p>
                    </div>

                </div>
                <div className="intro-right">
                    <div className="i-bg"></div>
                    <img src={Me} alt="" className="i-image" />
                </div>
            </div>
        </>
    )
}

export default Intro;
