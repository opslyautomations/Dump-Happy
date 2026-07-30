import type { ComponentType } from "react";

import JunkRemovalCostLosAngeles from "./junk-removal-cost-los-angeles";
import WhatJunkHaulersCantTake from "./what-junk-haulers-cant-take";
import IllegalDumpingLosAngeles from "./illegal-dumping-los-angeles";
import WhatHappensToJunkAfterPickup from "./what-happens-to-junk-after-pickup";
import MattressDisposalCalifornia from "./mattress-disposal-california";
import RefrigeratorDisposalCalifornia from "./refrigerator-disposal-california";
import HowToPrepGarageCleanout from "./how-to-prep-garage-cleanout";
import EstateCleanoutChecklist from "./estate-cleanout-checklist";
import HowHotTubRemovalWorks from "./how-hot-tub-removal-works";
import ConstructionDebrisRecyclingLosAngeles from "./construction-debris-recycling-los-angeles";
import Sb1383YardWasteLosAngeles from "./sb-1383-yard-waste-los-angeles";
import JunkRemovalVsDumpsterRental from "./junk-removal-vs-dumpster-rental";
import HelpingALovedOneWithHoarding from "./helping-a-loved-one-with-hoarding";
import OfficeCleanoutEwasteCalifornia from "./office-cleanout-ewaste-california";
import JunkRemovalSantaMonicaApartmentMoveout from "./junk-removal-santa-monica-apartment-moveout";
import EstateCleanoutBeverlyHillsBrentwood from "./estate-cleanout-beverly-hills-brentwood";
import ApartmentJunkRemovalKoreatownWeho from "./apartment-junk-removal-koreatown-weho";
import GarageCleanoutWestchesterLax from "./garage-cleanout-westchester-lax";

export const BLOG_BODIES: Record<string, ComponentType> = {
  "junk-removal-cost-los-angeles": JunkRemovalCostLosAngeles,
  "what-junk-haulers-cant-take": WhatJunkHaulersCantTake,
  "illegal-dumping-los-angeles": IllegalDumpingLosAngeles,
  "what-happens-to-junk-after-pickup": WhatHappensToJunkAfterPickup,
  "mattress-disposal-california": MattressDisposalCalifornia,
  "refrigerator-disposal-california": RefrigeratorDisposalCalifornia,
  "how-to-prep-garage-cleanout": HowToPrepGarageCleanout,
  "estate-cleanout-checklist": EstateCleanoutChecklist,
  "how-hot-tub-removal-works": HowHotTubRemovalWorks,
  "construction-debris-recycling-los-angeles": ConstructionDebrisRecyclingLosAngeles,
  "sb-1383-yard-waste-los-angeles": Sb1383YardWasteLosAngeles,
  "junk-removal-vs-dumpster-rental": JunkRemovalVsDumpsterRental,
  "helping-a-loved-one-with-hoarding": HelpingALovedOneWithHoarding,
  "office-cleanout-ewaste-california": OfficeCleanoutEwasteCalifornia,
  "junk-removal-santa-monica-apartment-moveout": JunkRemovalSantaMonicaApartmentMoveout,
  "estate-cleanout-beverly-hills-brentwood": EstateCleanoutBeverlyHillsBrentwood,
  "apartment-junk-removal-koreatown-weho": ApartmentJunkRemovalKoreatownWeho,
  "garage-cleanout-westchester-lax": GarageCleanoutWestchesterLax,
};
