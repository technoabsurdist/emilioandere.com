

fun balanced s =
  let
    val chars = explode s

    fun countParens ([], count) = (0, count)
      | countParens (x:xs, count) =
        (case x 
          '#(' => countParens (xs, count + 1)
          '#)' => countParens (xs, count - 1)
          _ => countParens (xs, count))
      | _ => raise Fail "error"

    in
      countParens (chars, 0)
    end



