import './App.css'
import Carousel from './Carousel'

const imgData = [
    {
        id: 1,
        src: "https://www.google.com/imgres?q=sunrise%20scenery&imgurl=https%3A%2F%2Fimages.stockcake.com%2Fpublic%2Fc%2F6%2F3%2Fc63e211f-d736-4dd9-b3bc-7dca20ad474e_large%2Fradiant-sunrise-scenery-stockcake.jpg&imgrefurl=https%3A%2F%2Fstockcake.com%2Fi%2Fradiant-sunrise-scenery_932816_833630&docid=iuRoLNeuviuKTM&tbnid=Iz_YDhVxzx4gXM&vet=12ahUKEwi1gI6eyYeQAxXAR2wGHY_qMz0QM3oECBUQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwi1gI6eyYeQAxXAR2wGHY_qMz0QM3oECBUQAA",
        alt: "Sunrise",
        // caption: ""
    },
    {
        id: 2,
        src: "https://www.google.com/imgres?q=landscape%20scenery&imgurl=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-x49po%2Fimages%2Fstencil%2F1500x1500%2Fproducts%2F130071%2F297058%2Fhandmade%252Fdownscaled%252Fh_fczzqlxtkme_2000x2000__01533.1722602911.jpg%3Fc%3D2%26imbypass%3Don&imgrefurl=https%3A%2F%2Fwww.fizdi.com%2Fnature-landscape-scenery-painting-art-3319-107701-handpainted-art-painting-24in-x-24in%2F%3Fsrsltid%3DAfmBOoo36tDAB5EseK74ZhqoAuJeZ5aqTY0VGXKX_v4iwQV4RtwSX8Nb&docid=vYV2U5o9eukqAM&tbnid=6YDN-l5Y4Nmb-M&vet=12ahUKEwiIrbm0yYeQAxUjXGcHHSeAAW4QM3oECCkQAA..i&w=1500&h=1367&hcb=2&ved=2ahUKEwiIrbm0yYeQAxUjXGcHHSeAAW4QM3oECCkQAA",
        alt: "Landscape",
        caption: "A nice landscape"
    },
    {
        id: 3,
        src: "https://www.google.com/imgres?q=river%20scenery&imgurl=https%3A%2F%2Fimages.stockcake.com%2Fpublic%2Fe%2Fd%2F4%2Fed46e285-7af7-44e8-9971-9f5846a3eeeb_large%2Fsunlit-forest-river-stockcake.jpg&imgrefurl=https%3A%2F%2Fstockcake.com%2Fi%2Fsunlit-forest-river_1295301_1114124&docid=l-qK9oPfmCgH6M&tbnid=WT4VApH8IDf89M&vet=12ahUKEwioodTGyYeQAxVecmwGHT9ECEoQM3oECBcQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwioodTGyYeQAxVecmwGHT9ECEoQM3oECBcQAA",
        alt: "River",
        caption: "River"
    },
    {
        id: 4,
        src: "https://www.google.com/imgres?q=rainforest%20scenery&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1602298674761-700e96568f5f%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frainforest&docid=RRBm5_sPbAO1-M&tbnid=lmErSGaIYYa7JM&vet=12ahUKEwjUlJPYyYeQAxXTSWwGHZ0PMCgQM3oECBwQAA..i&w=3000&h=1971&hcb=2&ved=2ahUKEwjUlJPYyYeQAxXTSWwGHZ0PMCgQM3oECBwQAA",
        alt: "Tropic Rainforest",
        // caption: ""
    }
]

export default function App() {
    return (
        <div>
            <Carousel data={imgData} />
        </div>
    )
}