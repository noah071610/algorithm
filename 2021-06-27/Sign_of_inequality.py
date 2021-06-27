n = int(input())
op = input().split() 
c = [False]
mx, mn = "", ""

def possible(i, j, k):
  if k == '<':
    return i < j
  if k == '>':
    return i > j
  return True

def solve(cnt, s):
  global mx, mn
  if cnt == n + 1:
    if not len(mn):
      mn = s
    else:
      mx = s
    return
  for i in range(10):
    if not c[i]:
      if cnt == 0 or possible(s[-1], str(i), op[cnt - 1]):
        c[i] = True
        print(f"----{cnt+1}, s=>{s + str(i)} i=>{i}-----")
        solve(cnt + 1, s + str(i))
        c[i] = False

solve(0, "")
print(mx)
print(mn)