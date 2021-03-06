import React, {ChangeEvent, MouseEventHandler} from "react"
import s from './Avatar.module.css'
import {BASE_URL} from "../../api/api"
import defaultAvatarImg from '../../user.png'
import {Image} from 'antd'
import {setProfileAvatarTC} from "../../data/profile-reducer";
import {useDispatch} from "react-redux";

const Avatar: React.FC<{photoUrl: string}> = (props) => {
    const refWrapperMenu = React.createRef<HTMLDivElement>()
    const dispatch = useDispatch()

    const mousePointed = (e: any) => {
        refWrapperMenu?.current?.classList.add(s.hovered)
    }

    const mouseOuted = (e: any) => {
        refWrapperMenu?.current?.classList.remove(s.hovered)
    }

    const fileSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0)
            dispatch(setProfileAvatarTC(e.target.files[0]))
    }


    return (
        <div className={s.container}>
            <div onMouseOver={mousePointed} onMouseOut={mouseOuted} className={s.wrapperImg}>
                <Image
                    className={s.image}
                    width={250}
                    height={250}

                    src={props.photoUrl ? BASE_URL + props.photoUrl : defaultAvatarImg}
                />
                <div ref={refWrapperMenu} className={s.wrapperMenu}>
                    <div className={s.wrapperMenu__update}>Update photo
                        <input onChange={fileSelected} type="file" className={s.wrapperMenu__file}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Avatar