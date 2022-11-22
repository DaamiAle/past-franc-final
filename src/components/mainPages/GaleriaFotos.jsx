import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyModal from "./Modal";


const GaleriaFotos = () => {

    const onClick = (e) => {
        console.log(e.target.src);
        let imgModal = document.getElementById("img-modal");
        let modalContainer = document.getElementById("modal-container");
        imgModal.src = e.target.src;
        imgModal.style.width = "80%";
        modalContainer.style.display = "flex";
    };

    return (
        <>
            <Container>
                <Row><p className="titulo">Galería de Fotos</p></Row>
                <Row className="titulo-sec"><p>Tortas</p></Row>
                <Row  className="slider-cont">
                    <Col className="gal-img">
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/43185814_2026978197368033_5160728695945560064_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE9SSfNL0wMROvBPFsoQN6oZ-ux2DuJ7uZn67HYO4nu5qnSknGYSKcqhgFT3VSVcJY&_nc_ohc=1_zfWEbb1XwAX8eF5VV&_nc_ht=scontent.faep6-2.fna&oh=00_AfBDS85gTNga--xLVc1zCOTqqKc9c-vY8QEfjK3CCWzTyw&oe=63A13B51" alt="Perrito" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/215588222_4303294673069696_7194328035100878925_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEn9uQzcBDQvkUT24tr8qrgVuO9JoewgglW470mh7CCCaaCjHtI1giklSQevPqYyzQ&_nc_ohc=tIIZ9qLice0AX9bfzyE&_nc_ht=scontent.faep6-1.fna&oh=00_AfBK9LuBhXeKPtSqEtx9nVzrUbLXENKUUUsWtHDBVEv-jQ&oe=637E3E26" alt="Merengue" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.6435-9/59782424_2346048928794290_907901694908563456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFo6XHHYwhYnwAd5yuIbhv0yiz4DKK-ixfKLPgMor6LF4OD_MU8qYBTRIJsw2rB95M&_nc_ohc=uC0uKeB842QAX9TCTaz&_nc_ht=scontent.faep6-1.fna&oh=00_AfAOMS9tvGWAx6KymGnDzkXdltl3i7HT6zPiDVmOL5DNpg&oe=63A1576E" alt="Oreo y Rocher" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/59845599_2346047925461057_4602865933717864448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGSKTMTxUu27dpRW7saqyUgowZ5jwjbXuOjBnmPCNte4344VQqc8AQDgMB6YT4F_4s&_nc_ohc=Q-ZMI_sUVa4AX-QTG7D&_nc_ht=scontent.faep6-2.fna&oh=00_AfDI7XmhZbQyrn6U6zgObyYX48NTaB8dsB6ImZecCKGX2A&oe=63A14389" alt="Mandala" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.18169-9/29542411_1772555702810285_4327540234058413053_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWizzXLlX0H8Uv4ez0r8kfQ1i31aY2mfBDWLfVpjaZ8BFlzHv4Y7x8BCe95DwRGwU&_nc_ohc=Q9g7-PvKazEAX_9CyE3&_nc_ht=scontent.faep6-1.fna&oh=00_AfCh9DvltwGiRdSSMCGAH5axlW9iXRty_buCKi8o4MdWMA&oe=63A1400F" alt="La Renga" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/43185814_2026978197368033_5160728695945560064_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE9SSfNL0wMROvBPFsoQN6oZ-ux2DuJ7uZn67HYO4nu5qnSknGYSKcqhgFT3VSVcJY&_nc_ohc=1_zfWEbb1XwAX8eF5VV&_nc_ht=scontent.faep6-2.fna&oh=00_AfBDS85gTNga--xLVc1zCOTqqKc9c-vY8QEfjK3CCWzTyw&oe=63A13B51" alt="Perrito" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/215588222_4303294673069696_7194328035100878925_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEn9uQzcBDQvkUT24tr8qrgVuO9JoewgglW470mh7CCCaaCjHtI1giklSQevPqYyzQ&_nc_ohc=tIIZ9qLice0AX9bfzyE&_nc_ht=scontent.faep6-1.fna&oh=00_AfBK9LuBhXeKPtSqEtx9nVzrUbLXENKUUUsWtHDBVEv-jQ&oe=637E3E26" alt="Merengue" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.6435-9/59782424_2346048928794290_907901694908563456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFo6XHHYwhYnwAd5yuIbhv0yiz4DKK-ixfKLPgMor6LF4OD_MU8qYBTRIJsw2rB95M&_nc_ohc=uC0uKeB842QAX9TCTaz&_nc_ht=scontent.faep6-1.fna&oh=00_AfAOMS9tvGWAx6KymGnDzkXdltl3i7HT6zPiDVmOL5DNpg&oe=63A1576E" alt="Oreo y Rocher" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/59845599_2346047925461057_4602865933717864448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGSKTMTxUu27dpRW7saqyUgowZ5jwjbXuOjBnmPCNte4344VQqc8AQDgMB6YT4F_4s&_nc_ohc=Q-ZMI_sUVa4AX-QTG7D&_nc_ht=scontent.faep6-2.fna&oh=00_AfDI7XmhZbQyrn6U6zgObyYX48NTaB8dsB6ImZecCKGX2A&oe=63A14389" alt="Mandala" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.18169-9/29542411_1772555702810285_4327540234058413053_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWizzXLlX0H8Uv4ez0r8kfQ1i31aY2mfBDWLfVpjaZ8BFlzHv4Y7x8BCe95DwRGwU&_nc_ohc=Q9g7-PvKazEAX_9CyE3&_nc_ht=scontent.faep6-1.fna&oh=00_AfCh9DvltwGiRdSSMCGAH5axlW9iXRty_buCKi8o4MdWMA&oe=63A1400F" alt="La Renga" />
                    </Col>
                </Row>
                <Row><p className="titulo-sec">Chocolatería</p></Row>
                <Row className="slider-cont">
                    <Col className="gal-img">
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.6435-9/204093754_4253885991343898_6709326191182887776_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHLH7JUumqoLTRsFYL7GEkvzk-MAOMsb8HOT4wA4yxvwTZ-AH_lLk8ifLAnFxt8hXs&_nc_ohc=LFTYZbn_hzEAX8mNETJ&_nc_ht=scontent.faep6-1.fna&oh=00_AfDKAX0HoSa5iZF6rMDG9fe7rT2KIIAPj0IXrZBhUrrMvw&oe=63A11B68" alt="Joystick" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/132605382_3761256380606864_3546365951249896572_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE5SNspDwEacB8e4T1i0tHxkSXpGz9y4BWRJekbP3LgFe0X116V1uDcG4VuLXeplC8&_nc_ohc=MtFy4j3Zlr0AX8Uq20K&_nc_ht=scontent.faep6-2.fna&oh=00_AfDOn_HHLWEN5KnNU757s2MyrvIOuXkb-A5c6nnKyCtBfQ&oe=63A12A65" alt="Chocomensaje" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.6435-9/201831904_4253894268009737_1351757720541163774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH_qn14atiFz7FUkrdxB2-aNBlgkN6MId40GWCQ3owh3kwBX5zvcRPW7mt94Fcl-XU&_nc_ohc=yemaE9GPe_UAX9-0Ozr&_nc_ht=scontent.faep6-1.fna&oh=00_AfDSj86_5szLWNRBz9cL_3JN3-kWEUq-2Zl_t7IgYnHKnA&oe=63A110FD" alt="Pool" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/118468950_3395865830479256_5391061974676805868_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHng3kZ-RTZnCLQxp0tgfFnwy4OUgJNDybDLg5SAk0PJpSUo3Aiu0nmISN3c_sJfRg&_nc_ohc=t-GW8_sSCE8AX_s7bXM&_nc_ht=scontent.faep6-2.fna&oh=00_AfD_f83dgvriBWvKVeYgzzn2HEDP7IDN9gUUa9D3Y3jbRg&oe=63A11896" alt="Bombones" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/204851247_4253889954676835_2654481169267714641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHlGgB013PTt86sJDF_nf1AerXP9roNqw16tc_2ug2rDasfUHOSa4ZAuDZVZC9Gcq8&_nc_ohc=lakb6fvtm7gAX_czVJ1&tn=BWDU-WsntJXiIHSi&_nc_ht=scontent.faep6-2.fna&oh=00_AfB5skgwDTBnen76IlEeXGNOj7nzvSmcAZ7XdTJ_CNpGuw&oe=63A10B62" alt="Formula 1" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.6435-9/204093754_4253885991343898_6709326191182887776_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHLH7JUumqoLTRsFYL7GEkvzk-MAOMsb8HOT4wA4yxvwTZ-AH_lLk8ifLAnFxt8hXs&_nc_ohc=LFTYZbn_hzEAX8mNETJ&_nc_ht=scontent.faep6-1.fna&oh=00_AfDKAX0HoSa5iZF6rMDG9fe7rT2KIIAPj0IXrZBhUrrMvw&oe=63A11B68" alt="Joystick" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/132605382_3761256380606864_3546365951249896572_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE5SNspDwEacB8e4T1i0tHxkSXpGz9y4BWRJekbP3LgFe0X116V1uDcG4VuLXeplC8&_nc_ohc=MtFy4j3Zlr0AX8Uq20K&_nc_ht=scontent.faep6-2.fna&oh=00_AfDOn_HHLWEN5KnNU757s2MyrvIOuXkb-A5c6nnKyCtBfQ&oe=63A12A65" alt="Chocomensaje" />
                        <img onClick={onClick} src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.6435-9/201831904_4253894268009737_1351757720541163774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH_qn14atiFz7FUkrdxB2-aNBlgkN6MId40GWCQ3owh3kwBX5zvcRPW7mt94Fcl-XU&_nc_ohc=yemaE9GPe_UAX9-0Ozr&_nc_ht=scontent.faep6-1.fna&oh=00_AfDSj86_5szLWNRBz9cL_3JN3-kWEUq-2Zl_t7IgYnHKnA&oe=63A110FD" alt="Pool" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/118468950_3395865830479256_5391061974676805868_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHng3kZ-RTZnCLQxp0tgfFnwy4OUgJNDybDLg5SAk0PJpSUo3Aiu0nmISN3c_sJfRg&_nc_ohc=t-GW8_sSCE8AX_s7bXM&_nc_ht=scontent.faep6-2.fna&oh=00_AfD_f83dgvriBWvKVeYgzzn2HEDP7IDN9gUUa9D3Y3jbRg&oe=63A11896" alt="Bombones" />
                        <img onClick={onClick} src="https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/204851247_4253889954676835_2654481169267714641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHlGgB013PTt86sJDF_nf1AerXP9roNqw16tc_2ug2rDasfUHOSa4ZAuDZVZC9Gcq8&_nc_ohc=lakb6fvtm7gAX_czVJ1&tn=BWDU-WsntJXiIHSi&_nc_ht=scontent.faep6-2.fna&oh=00_AfB5skgwDTBnen76IlEeXGNOj7nzvSmcAZ7XdTJ_CNpGuw&oe=63A10B62" alt="Formula 1" />
                    </Col>
                </Row>
                <Row><p className="titulo-sec">Panadería</p></Row>
                <Row  className="slider-cont">
                    <Col className="gal-img">
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                    </Col>
                </Row>
                <Row><p className="titulo-sec">Tartas</p></Row>
                <Row  className="slider-cont">
                    <Col className="gal-img">
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                    </Col>
                </Row>
                <Row><p className="titulo-sec">Postres</p></Row>
                <Row  className="slider-cont">
                    <Col className="gal-img">
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                        <img onClick={onClick} src="" alt="" />
                    </Col>
                </Row>
                <MyModal/>
            </Container>
        </>
    );
}

export default GaleriaFotos;