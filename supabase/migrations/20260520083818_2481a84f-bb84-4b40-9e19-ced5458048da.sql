
CREATE TABLE public.discussions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.discussions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read discussions"
ON public.discussions
FOR SELECT
USING (true);

CREATE POLICY "Anyone can post a discussion"
ON public.discussions
FOR INSERT
WITH CHECK (
  length(name) BETWEEN 1 AND 80
  AND length(message) BETWEEN 1 AND 1000
);
