import { inputEvent, typeEvent } from "./Event/index.js"
import { inputLocation, typeLocation } from "./Location/index.js"
import { typeMutation } from "./Mutation/index.js"
import { inputParticipant, typeParticipant } from "./Participant/index.js"
import { typeQuery } from "./Query/index.js"
import { typeSubscription } from "./Subscription/index.js"
import { typeUser, inputUser } from "./User/index.js"

const typeDefs = `#graphql

#User
${typeUser}
${inputUser}

#Event
${typeEvent}
${inputEvent}

#Location
${typeLocation}
${inputLocation}

#Participant
${typeParticipant}
${inputParticipant}

#Mutation
${typeMutation}

#Query
${typeQuery}

#Subscription
${typeSubscription}


`


export default typeDefs