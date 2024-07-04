##############################################################################################
#################################### MISE EN PLACE ###########################################
##############################################################################################


import pandas as pd
from fastapi import FastAPI
import json
import uvicorn


app = FastAPI(docs_url="/documentation")        #instanciation d'un objet fastapi et de la doc



##############################################################################################
###################################### LA DOC ##############################################
##############################################################################################

@app.get('/')

def game():                                                                        #doc


    return "/doc pour la documentation"


##############################################################################################
###################################### LES JEUX ##############################################
##############################################################################################



df_game= pd.read_csv("games.csv", sep=',')                                          #import

@app.get('/jeu')

def game():
    """
    Selectionne tout les jeux et leur scores
    """
    data = json.loads(df_game.to_json(orient = "records"))                             #all


    return data



###############################################################################################
###################################### LES STRUCTURES #########################################
###############################################################################################



df_structure = pd.read_csv('structures.csv',sep=',')                               #import


@app.get('/structure')

def structure():                                                                      #all
    """
    Selectionne les structures,une petite description et leur scores   
    
    """

    df_structure = pd.read_csv('structures.csv')

    data = json.loads(df_structure.to_json(orient = "records"))     


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

    if columns == '*':
        data = json.loads(df_structure.to_json(orient = "records"))
    
    else:
        data = json.loads(df_structure[columns.split('%')].to_json(orient = "records"))



@app.get('/structure/select={columns}/where={column2}=={condition}')                    #where

def fonction(columns:str, column2:str, condition:str):
    """
    Selectionne un ou plusieurs champs selon une condition sur un champ
    pour les sctructures
    Exemples:
    /structure/select=*/where=nom==Vitalis 
        renvoie toutes les champs de la structure Vitalis
    """

    if columns == '*':
        data = json.loads(df_structure.loc[df_structure[column2] == condition,:].to_json(orient = "records"))
    
    else:
        data = json.loads(df_structure.loc[df_structure[column2] == condition, columns.split('%')].to_json(orient = "records"))     


    return data



###############################################################################################
######################################  LES EVENEMENTS ########################################
###############################################################################################




# df_evenements = pd.read_csv('evenements.csv',sep=',')                                  #import



# @app.get('/evenement')

# def select(columns:str) :                                                                 #all
#     """
#     Selectionne les evenements
    
#     """

#     data = json.loads(df_evenements.to_json(orient = "records"))


#     return data



# @app.get('/evenement/select={columns}')                                                  #select
# def select(columns:str) :
#     """
#     Selectionne un champ
#     Même principe que pour les structures
#     pour selectionner plusieurs champs ils doivent être séparées par %
#     * pour tout selectionner

#     """

#     data = json.loads(df_structure[columns.split('%')].to_json(orient = "records"))


#     return data



# @app.get('/evenement/select={columns}/where={column2}=={condition}')                       #where

# def fonction(columns:str, column2:str, condition:str):
#     """
#     Selectionne un champ selon une condition sur un autre champ
#     Même principe que pour les structures
#     """

#     data = json.loads(df_evenements.loc[df_evenements[column2] == condition,columns.split('%')].to_json(orient = "records"))     


#     return data



###############################################################################################
######################################  VERIF AND RUN #########################################
###############################################################################################



if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')