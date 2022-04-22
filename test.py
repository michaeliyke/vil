from functools import cache


def check(characters: str):
  stack = []
  retBool = False
  for ch in characters:
    stack.append(ch)
    r = check(stack)
    retBool = r if type(r) == bool else retBool
  return retBool

def check(st: list):
  if len(st) < 2: return None
  x, y = "", ""
  cache = {}
  j = len(st)+1 # 16
  i = len(st) - j # 15-16 = -1
  while i + j != 0:
    if x.isdigit() and y.isdigit(): break
    ch: str = st[i]
    if ch.isdigit():
      y = x
      cache[y] = cache[x] if x in cache else None
      x = ch
      cache[x] = i
    i -= 1
  print(cache)
    
print(check("?7???31????5??5"))
# print(check("acc?7??sss?3rr1???5???5"))


def factorial(n: int):
  return 1 if n == 1 else n*factorial(n - 1)