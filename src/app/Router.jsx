import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { TR1_20thAnniversary } from "../pages/TR1-20thAnniversary";
import { DefaultLayout } from "../layouts/defaultLayout";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/20th-anniversary" element={<TR1_20thAnniversary />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}