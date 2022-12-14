import styled from '@emotion/styled'
import { color, space, SpaceProps } from 'styled-system'
import { theme } from '../../../theme'

export const DatePickerSelect = styled.select<SpaceProps>`
  ${space};
  height: 36px;
`

export const DatePickerWrapper = styled.div`
  /* .DateRangePicker {
    border-width: 1px;
    border-radius: 0.25rem;
  } */
  .DateInput {
    border-radius: 4px;
  }
  .DateInput_input {
    ${color};
    display: flex;
    font-weight: 400;
    border-radius: 4px;
    font-style: normal;
    align-items: center;
    position: relative;
    transition: all 0.2s;
    outline: none;
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 0.25rem;
    border: none;
    border-color: inherit;
    background-color: #fff;
    &:hover {
      border-color: ${theme.colors.gray[300]};
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  .DateInput_input__focused {
    box-shadow: 0 0 0 1px ${theme.colors.brand[500]};
    border-color: ${theme.colors.brand[500]};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${theme.colors.brand[500]};
    border: 1px double ${theme.colors.brand[500]};
    color: #fff;
  }
  .DateRangePicker {
    display: flex;
  }
  .DateRangePicker_picker {
    z-index: 1700;
  }
  .DateRangePicker > div,
  .DateRangePicker > div > .DateRangePicker {
    width: 100%;
  }
  .DateRangePickerInput__withBorder {
    border-color: inherit;
    border-radius: 4px;
  }
  .DateRangePicker__withBorder {
    border: none;
    height: 40px;
  }
  .CalendarMonth_caption {
    padding-top: 16px;
  }
`
