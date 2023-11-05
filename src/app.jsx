import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TR1_20thAnniversary } from "./pages/translations/20thanniversary";
import { DefaultLayout } from "./layouts/defaultLayout";
import { AncientLanguage } from "./pages/AncientLanguage";
import { Lessons } from "./pages/AncientLanguage/Lessons";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/20th-anniversary" element={<TR1_20thAnniversary />} />
                    <Route path="/ancient" element={<AncientLanguage />}/>
                    <Route path="/ancient/:lessonId" element={<Lessons />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}