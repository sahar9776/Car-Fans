import ShowInfoProvider from "./ShowInfoContext";
import ComponiesProvider from "./ComponiesContext";
import ListOfCarsProvider from "./ListOfCarsContext";
import RegisteredProvider from "./RegisteredContext";


function TotalContext({ children }) {
    return (
        <div>
            <RegisteredProvider>
                <ListOfCarsProvider>
                    <ComponiesProvider>
                        <ShowInfoProvider>
                            {children}
                        </ShowInfoProvider>
                    </ComponiesProvider>
                </ListOfCarsProvider>
            </RegisteredProvider>
        </div>
    )
}

export default TotalContext
