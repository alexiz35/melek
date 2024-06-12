import {useMediaQuery} from "react-responsive";
import Gallery from "react-grid-gallery";
import {reportImages030624, reportImages1} from "../ReportImages";
import React from "react";

export default function Article030624() {
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})

    return (
        <>
            <h1 className="text-center mt-4 mb-4">Навчання із безпечного поводження на воді: Запорука Безпеки</h1>
            <h6>03.06.24</h6>


            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"
            }}>
                <Gallery
                    images={reportImages030624}
                    rowHeight={400}
                    enableLightbox={true}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    margin={isMobile ? 2 : 20}
                />

            </div>

            <h5 className="text-center mt-5 mb-5">
                Незабаром закінчення навчального року, а це – час літніх канікул. Літо – це період активного відпочинку,
                коли з’являється можливість загоряти, купатися у водоймах: річках, озерах. Але необхідно пам’ятати, що
                ця пора часом приносить не тільки радість, але й завдає прикростей. Іноді задоволення від купання може
                обернутися на справжню трагедію, пов’язану з травматизмом і загибеллю людей.
                <br/>Тому відпочиваючи на водоймі, необхідно знати й виконувати прості правила безпечного поводження на
                водних об’єктах. Саме з такою метою 03.06.2024 року представниками «БО «БФ «MELEK» спільно з фахівцями
                Лубенського РУ ГУ ДСНС України у Полтавській області та Лубенського РВП ГУНП в Полтавській області з
                вихованцями Опорного закладу "Засульський ліцей Лубенської міської ради Лубенського району Полтавської
                області " проведено навчальний захід на тему: “Уміння триматися на воді – запорука безпеки”, на якому
                дітей було ознайомлено з правилами безпечної поведінки на воді та біля води.
                <br/>Також в рамках заходу  дітей та працівників освітнього закладу було ознайомлено з алгоритмом дій
                щодо запобігання нещасним випадкам з людьми на водних об’єктах, наголошено про необхідність вивчення та
                дотримання правил безпечної поведінки на воді, ознайомлено з діями населення під час надання першої
                допомоги потерпілим, а також при нагоді проведено роз’яснення з актуальної нині теми: а саме щодо
                небезпеки пов’язаної з вибухонебезпечними предметами.
                <br/>Основна мета заходу – підвищити обізнаність присутніх про правила безпеки на воді, навчити їх
                основних навичок самозахисту та надання першої допомоги у випадку надзвичайних ситуацій. Це допоможе
                дітям почуватися впевненіше під час відпочинку біля води і зменшити кількість нещасних випадків.
                <br/>Навчання із безпечного поводження на воді є надзвичайно важливим заходом у школі, який сприяє
                збереженню життя та здоров’я дітей. Це не тільки навчає їх основним правилам безпеки, але й розвиває
                відповідальність та навички самозахисту. Важливо, щоб такі заходи проводилися регулярно та з
                урахуванням актуальних методик і технологій. Тільки тоді ми зможемо забезпечити максимальний рівень
                безпеки для наших дітей.
                <br/>Даний захід проведено в рамках ініціативи «Безпечна водa - вдосконалення служб та реагування на
                ризики», який впроваджує «БО «БФ «MELEK» за технічного адміністрування ІСАР Єднання та сприяння
                Програми розвитку ООН (UNDP) в Україні за фінансової підтримки Європейського Союзу, наданої в межах
                проєкту«EU4Recovery – Розширення можливостей громад в Україні», фінансової підтримки Урядів Данії та
                Королівства Нідерландів.

            </h5>


        </>
    )
}
