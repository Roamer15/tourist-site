import { createContext } from "react";
import propTypes from "prop-types";

export const CardContext = createContext()

export const CardData = ({children}) => {
    const cards = [
        {
            id: 1,
            title: 'Akagera National Park',
            description: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
            image: 'https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r2wNgUQxFm798hYM8iigkiL0Ac4F43t9rO2vYMNScYzIWW-jLE5T3UVVBG~9zPSpSIFep4nCjnY-1P3mAmgB9IsYDSotdQid5JxQ7SEHuDgH1v5vaIJ6RNYSE2P1hB8FPlL3IecuTqxUWEpuYSuCPLKeFgTpxHLXLl3sYwYyyE9n2AzPQ9-IJ61t7sz8HIkDwLWzHQnw6sx71-pNEFX7hoWwqSI3jY3ZwQMR731tDeb~Dzk3Cnw1gDPIKHIrsNpTdgEKKVATbx4FCPCnCvyNSNUm66cEH-IYAsm1bP8LL3MFIcRqXLDXwpSpFsbdAatptbX79iX0fSlJOdko-o4kEw__'
        },
        {
            id: 2,
            title: 'Bisoke Hike',
            description: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
            image: 'https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s8QxeYj6PYG9ptlYU2FEfRCaw9gM11ubym1I21N63402JygyamiPbn3QNgEOBJzxnuN7oSA23fpsGO9mOMdIVlJqHlKqBVixt7BY91xO1DbLKrWIC4Y-yd5DE8uy-hrRso2PNs3GuPkMMyvmwTENaA0Tg5KEhrW5x~yDBF7ZDA~~A9FXisXLgiaEc5R6dchNkLTT-BcGl~NUvOAPOjAH0LNGkZz88XGOcS5cYgU4fT4Kvv5xvb9HSOuZVi5jJunSXqPlzyyJm2Oz35W8GLOFD4CKA1VP03QXu2rUvl8n4MaUDM6wimq5olHJ-jl8QGuDwkM73ljfqXynYSCeeoz3hg__'
        },
        {
            id: 3,
            title: 'Lake Kivu trip',
            description: 'A trip to Lake Kivu can be a truly unique and memorable experience. ',
            image: 'https://s3-alpha-sig.figma.com/img/2509/3e3b/45eb67d244449dc32bcd471b5af02dde?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nk68gdhtBxbxvtUGwP4S4D7z70bUKw3Y2hx2417gjHtYXuqEhtPOag30JXKvrHF62Wc3cSceE1Fw7kCs3r31sn2VJHeDd105SJGIIIDg0ffh8g5wlWhBSo3W6VazDRM1WwPrZI4B1yUH7m4lbVbv0Ymix-SWt1yG3cEnD4hN4OvuW3sB1jPdiCTfnl3uMO54BkkmPgRXgdeDzVYQ30GzeTc1M0v86BcewgnUP4pte3tfjHLACu6mCRgZzoTNpZKLl0bDWiTv7iDg1Ct-VR7o7QIKMaI3hSk0CwmNURj6A9Ljypd2s4o7n-Mj58ytCCkXTNSPZ2hTxWG2zwz0NpW4Dg__'
        }
    ]

     const destinations = [
        {
            name: "Kigali",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/a863/7b3c/2e3b6a00b8bbcfe1105f7916ee6a392e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W7lhSDPRtP2oh3bQ4RkxTjdNw5V4Rt2Wcz7Ks3ASIqq2r6o~3bN3zyOGysMx-rAUq3Vg3yRsjsMAu0gjtJfgUoyFib9Z8E-tIBsJpW~JAjLXZFSSpmMZsEIiIhVXjp1h1X2h-wah2OuGgoRj1EG04MZ7mHD~EX7Xiw6Qpf56Trnb0e1GJ4TmBsWVxYrIWMTuk2QaTCL2QFy5UNIipSz6uQyVM97OkBBYlG0cZ4JYssKZet3lvCzytPXK5e-6A-FCjFJw2TNdHN4bX6DjnH6mHpL-lsbowzEMFLGcX9G6qm4lyz-3eetoI2uZEC6l9-edoQLv2Z-pJ9u-9pAOmxDcUw__"
        },
        {
            name: "Huye",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/8617/a5ae/25ee4aa2ad522926670eec6990d4dfd8?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C2IjFqwY8DhrCrXCVd5BXcojampvchteqXyeZq31fDFnX9Gzdl2D4V0MclpqQMjk8BCe5PnYIc6vTkyVzgGtWwcg81r5-vx~mtdMYRYSXVRkiSMAbjXPp5U0Pq59amjdIv7-tdQAvBvG3pLqaSorm1eKvTC2AckXnBvoqDewY9STQJlvFCiZFIyeqsxptv1o31e6Ul0kCteasf6riuBGak-4ohXBEwdrESd2BD6NYMbDoDYEEmt7LRNO1tHh0l2xGFmBfa7~gxiS0fO6ZtI2uDo2shIlW0FAhbwSp8y4LGgaVE-C4whK~W5NR5C-3qEvaiElcs7ICzEXCSXn8JOmiQ__"
        },
        {
            name: "Rubavu",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/80dd/5d9d/fbecb6b4f26bc944de8a49c1f1fe7022?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XJHINtxD~WQ2zSRut-Vkis9enoAAi1pLEGVRVYk-Ss59~-bE6UXGU~atUa7~3R3JNCYCjdiLJX7LY~bUQLIs60pb6o4FHeH7L3Em7-mfnD68PnnE0V5SfrgUou3d7aes7O3nHgQD30k1A30uOnrekCepl093fT6bCho1Z2mtYvOa7G8Wct9JTlNfznCMME2nFshuLR02eDmGLQbXBPRASdDFs2EZ6O7IIyoiySojZ8O~jrNfpxKZFN7OZF5GaRFPRGziwbSM1osNOfGsmjt5T68hE7meFZBpXZbD6c6WIswsnfkSk0kMut9G5pS6QRLFijQzTTnytBdhnIG4J4-fIw__"
        },
        {
            name: "Musanze",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/fea2/604b/aee50bbe92ffcd58172c7b9db8afdd94?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AL8COtp~wV-lrXIaC0pYUY0RQu8s3uZ3Wz-X1oFTAwOsPV2ueruxdL8wkLL9jcV2TLf7nA22zB56Ah5NMxAczSi21jiocu8juQMYOOn0vmgD~6t1iM~kgbZALuDiu0~euC5~N9ltk7D3MfgY5n-owEaimkLrlxhw~EWSRW1RVHVRcwKWxonEsk3Ua2U2bbz1ko3sCk9AmxHj5InTMjGwZHrYTUVcLxsaDlRYdhwGVpRKwJVm11-WsHXJPD5o~E2P-29-Pdm8KDozG1FSF-2BH~Mx5gECqiL-BfDYqRhYZF8HoKeK9syYYKnDKBOBUqBuKFy6uqGxnARPUlHATGSOPA__"
        }
    ];

    return (
        <CardContext.Provider value= {{cards, destinations}}>
            {children}
        </CardContext.Provider>
    )
}

CardData.propTypes = {
    children: propTypes.node.isRequired
}