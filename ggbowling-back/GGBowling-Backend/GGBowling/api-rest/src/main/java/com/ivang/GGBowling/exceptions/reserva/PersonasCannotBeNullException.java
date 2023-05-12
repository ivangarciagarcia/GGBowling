package com.ivang.GGBowling.exceptions.reserva;

import lombok.experimental.StandardException;

@StandardException

public class PersonasCannotBeNullException extends Exception{
    public PersonasCannotBeNullException(String message) {
        super(message);
    }
}
