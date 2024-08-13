//Componente del reproductor
/*
ICONOS
Checked circle:
import { MdCheckCircle } from "react-icons/md";

Add Circle:
import { MdAddCircle } from "react-icons/md";

Lupa:
import { MdOutlineSearch } from "react-icons/md";

Settings:
import { MdSettings } from "react-icons/md";

Play:
import { MdPlayArrow } from "react-icons/md";

Play Circle:
import { MdOutlinePlayCircle } from "react-icons/md";

Pause:
import { MdPause } from "react-icons/md";

Shuffle:
import { MdShuffle } from "react-icons/md";

Volume up:
import { MdVolumeUp } from "react-icons/md";

Volume down:
import { MdVolumeDown } from "react-icons/md";

Next:
import { MdOutlineSkipNext } from "react-icons/md";

Previous:
import { MdSkipPrevious } from "react-icons/md";

Loop:
import { MdLoop } from "react-icons/md";

Edit:
import { MdEdit } from "react-icons/md";

Album:
import { MdAlbum } from "react-icons/md";

Delete:
import { MdDelete } from "react-icons/md";
*/

import styles from '/styles/Player.module.css';
import { Dela_Gothic_One} from "next/font/google";

const Dela = Dela_Gothic_One({
    weight: '400',
    subsets: ["latin"]
});

export default function Player() {
    return (
        <div className={styles.container}>
            <div className={styles.topDiv}>
                <div className={Dela.className}>
                    <h1 id='FluctusLogo'>Fluctus</h1>
                </div>  
            </div>
        <div className={styles.bottomDiv}></div>
        </div>
    );
}
