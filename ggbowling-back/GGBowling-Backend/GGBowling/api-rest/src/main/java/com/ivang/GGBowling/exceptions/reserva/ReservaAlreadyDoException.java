package com.ivang.GGBowling.exceptions.reserva;

import lombok.experimental.StandardException;

@StandardException
public class ReservaAlreadyDoException extends Exception {
    public ReservaAlreadyDoException(String message) {
        super(message);
    }
}
