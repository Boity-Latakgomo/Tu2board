import React from 'react';
import { AppProps } from "next/app";
import { UserProvider } from "../app/providers/user";
import { CourseProvider } from "../app/providers/Course";
import { QuestionProvider } from "../app/providers/question";
import { AnswerProvider } from "../app/providers/answer";
import { RatingProvider } from "../app/providers/rating";
import { BookmarkProvider } from "../app/providers/bookmark";

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <RatingProvider>
      <BookmarkProvider>
      <AnswerProvider>
        <QuestionProvider>
          <CourseProvider>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </CourseProvider>
        </QuestionProvider>
      </AnswerProvider>
      </BookmarkProvider>
    </RatingProvider>
  );
}

export default MyApp;