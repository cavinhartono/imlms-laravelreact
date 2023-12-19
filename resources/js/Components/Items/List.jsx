export default function List({ icon = null, label, href }) {
    return (
        <li>
            <a
                href={href}
                className="flex gap-4 justify-between items-center p-3 rounded-lg transition"
            >
                <span className="w-5 h-5">{icon}</span>
                <span className="text-base font-normal flex items-center gap-2">
                    {label}
                    <span className="hidden opacity-0 hover:inline-block hover:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <polyline
                                points="112 184 256 328 400 184"
                                style="
                                            fill: none;
                                            stroke: #fff;
                                            stroke-linecap: round;
                                            stroke-linejoin: round;
                                            stroke-width: 48px;
                                        "
                            />
                        </svg>
                    </span>
                </span>
            </a>
        </li>
    );
}
