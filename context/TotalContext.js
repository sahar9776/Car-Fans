import ShowInfoProvider from "./ShowInfoContext";
import ComponiesProvider from "./ComponiesContext";
import ListOfCarsProvider from "./ListOfCarsContext";
import CodesProvider from "./CodesContext";
import RacingProvider from "./RacingContext";


function TotalContext({ children }) {
    return (
        <div>
            <RacingProvider>
                <CodesProvider>
                    <ListOfCarsProvider>
                        <ComponiesProvider>
                            <ShowInfoProvider>
                                {children}
                            </ShowInfoProvider>
                        </ComponiesProvider>
                    </ListOfCarsProvider>
                </CodesProvider>
            </RacingProvider>
        </div>
    )
}

export default TotalContext
