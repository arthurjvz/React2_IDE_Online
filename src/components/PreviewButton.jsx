import showView from "../assets/view.svg"
import hideView from "../assets/hide.svg"
import { useSelector, useDispatch } from "react-redux"
import {togglePreview} from "../features/preview"

export default function PreviewButton() {
    const previewData = useSelector(state => state.preview)
    const dispatch = useDispatch()
  return (
    <button
    className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-slate-50"
    onClick={() => dispatch(togglePreview())}
    >
        <img 
        className="w-5 mr-3"
        src={previewData.preview ? hideView : showView} alt="" /> {/* preview est sur true ? Oui -> hideView ( on propose de le cacher)
        Non -> showView (on propose de l'afficher) */}

        <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
    </button>
  )
}
