export const random = (from, to) => {
  if(!to)
  {
    to = from;
    from = 0;
  }
  return parseInt(Math.random() * (to - from) + from);
};

export const filterArr = (list, func) => {
  const result = [];
  list.forEach((item) => {
    if(func(item))
    {
      result.push(item);
    }
  });
  return result;
}

export const findOne = (list, func) => {
  for(let i = 0; i < list.length; i++)
  {
    if(func(list[i]))
    {
      return list[i];
    }
  }
}

export const deepCopy = (obj) => {
  if(typeof obj !== 'object' || obj === null)
  {
    return obj;
  }
  let result = obj instanceof Array ? [] : {};
  for(let key in obj)
  {
    result[key] = deepCopy(obj[key]);
  }

  return result;
}
