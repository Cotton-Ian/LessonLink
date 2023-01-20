import {images} from '../../Config/Images/images';

import '../../Assets/Styles/main.css';

export default function Banner() {

    return (
        <div>
            <img src={images.background} className="object-cover h-100 md:h-100 xl:h-110 2xl:h-128 w-full absolute brightness-75" alt=""/>
            <div className="relative mx-auto lg:mx-24 max-w-screen-xl lg:max-w-screen-md px-4 py-40 md:pt-48 sm:px-6 lg:px-8 md:pb-15">
                <div className="text-3xl font-extrabold sm:text-5x text-white lg:text-6xl">
                    <h1>Lesson Link</h1>
                </div>
                <div className="mt-4 max-w-5 sm:text-xl sm:leading-relaxed text-white lg:text-2xl">
                    <h3>Notre site offre des outils et des méthodes pour un apprentissage plus rapide et efficace, avec
                        des fonctionnalités telles que la création facile de cartes de cours pour l'étude. Nous aidons
                        les
                        étudiants à atteindre leurs objectifs académiques de manière efficace. Rejoignez notre
                        plateforme pour
                        maximiser votre potentiel d'apprentissage.
                    </h3>
                </div>
            </div>
            <img className="w-2/3 z-40 lg:w-2/5 relative float-right" src={images.book} alt="Logo"/>;
        </div>
    )

}