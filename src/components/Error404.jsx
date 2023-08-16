export default function Error404(props) {
    return (
        <div className={`mx-5 text-center position-absolute top-50 start-50 translate-middle text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
            <h1>NOT FOUND (ERROR 404)</h1>
            <p className="fs-2">The page you are looking for does not exists.</p>
        </div>
    )
}