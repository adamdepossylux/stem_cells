from bibV3 import *

def bienColoriee(G):
    for t in listeSommets(G):
        for x in listeVoisins(t):
            if couleurSommet(t)==couleurSommet(x):
                return False
    return True

def effacerCouleur(G):
    for s in listeSommet(G):
        colorierSommet(s,'white')

def sommetColoriable(G):
    for s in listeSommets(G):
        for v in listeVoisins(s):
            if couleurSommet(s)=='white' and couleurSommet(v)!='white':
                return s
    return None

def ListeSommetColoriable(G):
    l=[]
    for s in listeSommet(G):
        for v in listeVoisins(s):
            if couleurSommet(s)=='white' and couleurSommet(v)!='white':
                l=l+[s]
    return l

def nbVoisins(s):
    c=0
    for v in listeVoisins(s):
        c=c+1
    return c

def voisinsNon(s,c):
    l=[]
    for k in listeVoisins(s):
        if couleurSommet(k)!=c:
            l=l+[k]
    return l

def monoCouleurVoisins(s):
    if voisinsNon(s,'white')==[]:
        return False
    v2=voisinsNon(s,'white')[0]
    c=0
    for v in voisinsNon(s,'white'):
        if couleurSommet(v)==couleurSommet(v2):
            c=c+1
        v2=v
    if c==len(voisinsNon(s,'white')):
        return v
    return False

def deuxColorations(G,c1,C2):
    colorierSommet(listeSommets(G)[0],c1)
    while sommetColoriable(G):
        for s in listeSommets(G):
            if monoCouleurVoisins(s):
                colorierSommet(monoCouleurVoisins(s),c2)
            elif 
            else:
                return False
    return True

C=sommetNom(fig32,'C')
A=sommetNom(fig32,'A')
B=sommetNom(fig32,'B')
D=sommetNom(fig32,'D')

