import { FaGithub } from "react-icons/fa"

export default function Card(props) {
        return (
            <div className="mx-auto md:mx-2 rounded-3xl bg-slate-500 m-3 max-w-xs bg-cover" style={{backgroundImage: "linear-gradient(180deg, transparent, #000), url("+props.image+")", backgroundSize: '100% 100%)'}}>
                <div className="pt-20 px-5 pb-5">
                    <h1 className="text-2xl font-bold text-white">{props.name}</h1>
                    <h1 className="text-sm font-light text-white mb-2">{props.tech}</h1>
                    <h3 className="text-white mb-5">{props.description}</h3>
                    <div className="flex flex-row justify-center ">
                        <a href={props.link} className="rounded hover:bg-slate-600 bg-slate-500 p-1 px-3 text-white">See Project</a>
                        <a href={props.source} className="rounded hover:bg-blue-700 bg-blue-500 p-1 px-3 mx-2 flex items-center rounded"><FaGithub className="inline text-white" /></a>
                    </div>
                </div>
            </div>
        );
}