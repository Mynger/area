import styles from '../../article.module.scss'
import { useTranslation} from 'react-i18next';
import Bar from '/src/components/bar/bar.jsx';
import Video from '/src/components/video.jsx';

function Triangles() {

    const { t, i18n } = useTranslation();

    const links = [
        {text: t('height'), scroll: 'height'},
        {text: t('radius'), scroll: 'radius'},
        {text: t('semiperimeter'), scroll: 'semiperimeter'},
    ];

    document.title = t('triangles');

    return (
        <section  className={styles.section}>
            <Bar links={links} />
            <h2>{t('triangles')}</h2>
            <p>{t('trianglesInfo')}</p>
            <h3 id='height'>{t('height')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('heightInfo') }}></p>
                <Video src='./src/assets/2d/triangles/triangle(height).mp4'/>
            </article>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('heightInfoTwo') }}></p>
                <Video src='./src/assets/2d/triangles/triangle(sin).mp4'/>
            </article>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('heightInfoThree') }}></p>
                <Video src='./src/assets/2d/triangles/regularTriangle.mp4'/>
            </article>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('heightInfoFour') }}></p>
                <Video src='./src/assets/2d/triangles/rightTriangle.mp4'/>
            </article>
            <h3 id='radius'>{t('radius')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('radiusInfo') }}></p>
                <Video src='./src/assets/2d/triangles/triangle(sRadius).mp4'/>
            </article>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('radiusInfoTwo') }}></p>
                <Video src='./src/assets/2d/triangles/triangle(bRadius).mp4'/>
            </article>
            <h3 id='semiperimeter'>{t('semiperimeter')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('semiperimeterInfo') }}></p>
                <Video  src='./src/assets/2d/triangles/triangle(heron).mp4'/>
            </article>
        </section>
    )
}

export default Triangles