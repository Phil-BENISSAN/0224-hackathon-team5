##############################################################################################
#################################### MISE EN PLACE ###########################################
##############################################################################################


import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import uvicorn


app = FastAPI(docs_url="/documentation")        #instanciation d'un objet fastapi et de la doc


# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------

origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##############################################################################################
###################################### LA DOC ##############################################
##############################################################################################

@app.get('/')

def game():                                                                        #doc
    df_game= pd.read_csv('games.csv', sep=',') 

    return "/doc pour la documentation"


##############################################################################################
###################################### LES JEUX ##############################################
##############################################################################################



@app.get('/jeu')

def game():
    """
    Selectionne tout les jeux et leur scores
    """

    df_game= pd.read_csv('app/games.csv', sep=',')
    data = df_game.to_json(orient = "index")                             #all


    return data



###############################################################################################
###################################### LES STRUCTURES #########################################
###############################################################################################



@app.get('/structure')

def structure():                                                                      #all
    """
    Selectionne les structures,une petite description et leur scores   
    
    """

    df_structure = pd.read_csv('app/structures.csv')

    data = df_structure.to_json(orient = "index",force_ascii=False))     


    return data


@app.get('/structure/select={columns}')                                                #select
def select(columns:str):
    """
    selectionne un champ pour toutes les structures
    pour selectionner plusieurs champs ils doivent être séparées par %
    pour selectionner tout les champs faites * (comme en sql)

    Exemples:
        /structure/select=nom    selectionnera tous les noms
        /structure/select=nom%description  selectionnera les noms et les descriptions 
        /structure/select=*    selectionnera tout les champs             
    """

    df_structure = pd.read_csv('app/structures.csv')

    if columns == '*':
        data = df_structure.to_json(orient = "index",force_ascii=False)
    
    else:
        data = df_structure[columns.split('%')].to_json(orient = "index",force_ascii=False)

    
    return data


@app.get('/structure/select={columns}/where={column2}=={condition}')                    #where

def fonction(columns:str, column2:str, condition:str):
    """
    Selectionne un ou plusieurs champs selon une condition sur un champ
    pour les structures
    Exemples:
    /structure/select=*/where=nom==Vitalis 
        renvoie toutes les champs de la structure Vitalis
    """

    df_structure = pd.read_csv('app/structures.csv')

    if columns == '*':
        data = df_structure.loc[df_structure[column2] == condition,:].to_json(orient = "index",force_ascii=False)
    
    else:
        data = df_structure.loc[df_structure[column2] == condition, columns.split('%')].to_json(orient = "index",force_ascii=False)   


    return data



###############################################################################################
######################################  LES actu ########################################
###############################################################################################




@app.get('/evenement')

def select(columns:str) :                                                                 #all
    """
    Selectionne les evenements
    
    """
    df_actu = pd.read_csv('app/actu.csv',sep=',')

    data = df_actu.to_json(orient = "index",force_ascii=False)


    return data



@app.get('/evenement/select={columns}')                                                  #select
def select(columns:str) :
    """
    Selectionne un champ
    Même principe que pour les structures
    pour selectionner plusieurs champs ils doivent être séparées par %
    * pour tout selectionner

    """
    df_actu = pd.read_csv('app/actu.csv',sep=',')

    if columns == '*':
        data = df_actu.to_json(orient ="index",force_ascii=False)
    
    else:
        data = df_actu[columns.split('%')].to_json(orient = "index",force_ascii=False)



@app.get('/evenement/select={columns}/where={column2}=={condition}')                       #where

def fonction(columns:str, column2:str, condition:str):
    """
    Selectionne un champ selon une condition sur un autre champ
    Même principe que pour les structures
    """

    df_actu = pd.read_csv('app/actu.csv',sep=',')

    if columns == '*':
        data = df_actu.loc[df_actu[column2] == condition,:].to_json(orient = "index",force_ascii=False)
    
    else:
        data = df_actu.loc[df_actu[column2] == condition, columns.split('%')].to_json(orient = "index",force_ascii=False)   


    return data



###############################################################################################
######################################  VERIF AND RUN #########################################
###############################################################################################



if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')
