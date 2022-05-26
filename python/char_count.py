def char_count(string):
  chars = {}
  result = []
  string = string.lower()
  # remove spaces between words
  string = ''.join(string.split(' '))
  for letter in string:
    # retrieve *list* of current keys in dictionary
    keys = chars.keys()
    #check if key exists for current letter
    if letter in keys:
      # if so, increment by one
      chars[letter] += 1
    else:
      # if not, initialize to one
      chars[letter] = 1
  # iterate over keys
  for key in chars:
    # add key/value to result list
    result.append([key, chars[key]])
  # sort result list by key value (not the key, itself)
  # lambda function = first by key value (descending), then by key (ascending)
  result = sorted(result, key = lambda x: (-x[1],x[0]))
  return(result)

#print(char_count("an apple a day will keep the doctor away"))