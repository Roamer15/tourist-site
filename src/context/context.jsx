import { createContext } from "react";
import propTypes from "prop-types";

export const CardContext = createContext()

export const CardData = ({children}) => {
    const cards = [
        {
            id: 1,
            title: 'Akagera National Park',
            description: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
            image: 'https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BFnMzB1fVjO4hybK0MliJ2kLAbEZ1FO8vXk3j0ha3-IuY~CqXZ98hScMGL3OVoG784pno1jbHteJjmZ0rFrzzIbyELeibS9oDiTaHRn2UuNF4GULyo1eeZonkDOg2LD96MWofpaZWfq2XvhEgFcPZGfb2aab86um39s5vPPoz2A6oDTVRumX16InVxmusYi1fnFrZWLoUbMW6o0w09rUchsaNlUsczHRk-jz6DYh7DbyE3qaYdiJYOAVILIMaZtWNYSnksaE4Bvmbd5qUowBTKEK1zWfAro7x0gpp5Yd9HiMh-YRvxPWWhP5WS3uQMYC527uwp9SAee~14IIHgAtww__'
        },
        {
            id: 2,
            title: 'Bisoke Hike',
            description: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
            image: 'https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NZSAUblWlqDFD7UbK8tfNII-7~mjV9rf-sYz9lt51xT0wHLvJgkFPKbXgXVgKB4-OBuSPTtqipaHYvIa3h9Pkk0WmKRVwGXHSJzCtMxwrEX4-JXM959uOaFRE54RTsfdY3WodoJi5WwFruI1C~i7FevlcR8Lp5zsCW4W-5Bzf9i33vHd9xh9vhc7XXVUbmkl80x8JcsV5GQFCQ4BVbo1JaeSNBImXkJ1lDZNTaYmtI~bcOfLdbX0P0O07~WAhLDocLeRf1psp8InzloqZ~4NhW-vlfoLZUuMghgTUFEB1xPg6g4XpsSbjKXKWGcyvekY8yB9MKHCuAC0thY-DuXqSA__'
        },
        {
            id: 3,
            title: 'Lake Kivu trip',
            description: 'A trip to Lake Kivu can be a truly unique and memorable experience. ',
            image: 'https://s3-alpha-sig.figma.com/img/2509/3e3b/45eb67d244449dc32bcd471b5af02dde?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QNr1syVxceKilfjOH~-wOPWc3nExY4M9-LzwCDL8gb4NnKDxE6-fdRpJwJ4H1peWbf2qCrHo-NHQAci8uyu3iYdpzxzgHqoY2cOzIhmBWu~7NpygTqtvJqAOKlpIb4xuB9FI~sAdF~ZwcrINOMHFVj7nFTz31OroDrd~lyjwsnrAwIK3DPKYPaEIe5mRtkQ71SWU7DYAYNj1Ed-FxQXT7Cks2lh4zlHt76wCgr2OMs3e9FYOvLd61LN-rjhi4WYG8uvVXS7XKqqRZuMG96nXCiQBsLPhRwUPf4xX-roODrCxkrF-6AllcGM~w5DcjT~mXb363Aaa2IO~JyS-Yu7TRg__'
        }
    ]

    return (
        <CardContext.Provider value= {{cards}}>
            {children}
        </CardContext.Provider>
    )
}

CardData.propTypes = {
    children: propTypes.node.isRequired
}