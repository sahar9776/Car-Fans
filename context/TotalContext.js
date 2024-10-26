import ShowInfoProvider from "./ShowInfoContext";
import ComponiesProvider from "./ComponiesContext";
import ListOfCarsProvider from "./ListOfCarsContext";


function TotalContext({ children }) {
    return (
        <div>
            <ListOfCarsProvider>
                <ComponiesProvider>
                    <ShowInfoProvider>
                        {children}
                    </ShowInfoProvider>
                </ComponiesProvider>
            </ListOfCarsProvider>
        </div>
    )
}

export default TotalContext
