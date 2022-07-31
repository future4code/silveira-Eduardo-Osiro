import DogBusiness from "../src/Business/DogBusiness"

const inputMock = {
     date: '29/03/2023',
     duration: '60',
     latitude: '40.7573409759719',
     longitude: '-73.9856557207964',
     pets: 2,
     start_time: '15:00',
     end_time: '16:00'
}

describe('DogWalk creation tests', () => {
     test('Invalid date input', async () => {
          const input = inputMock
          input.date = ""
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.date = '29/03/2023'
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
     test('Invalid duration input', async () => {
          const input = inputMock
          input.duration = ""
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.duration = '60'
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
     test('Invalid latitude input', async () => {
          const input = inputMock
          input.latitude = ""
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.latitude = '40.7573409759719'
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
     test('Invalid longitude input', async () => {
          const input = inputMock
          input.longitude = ""
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.longitude = '-73.9856557207964'
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
     test('Invalid pets input', async () => {
          const input = inputMock
          input.pets = 0
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.pets = 2
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
     test('Invalid start_time input', async () => {
          const input = inputMock
          input.start_time = ""
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.start_time = '15:00'
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
     test('Invalid end_time input', async () => {
          const input = inputMock
          input.end_time = ""
          try {
               await DogBusiness.createWalk(input)
           } catch (error: any) {
               input.end_time = '16:00'
               expect(error.message).toEqual('Campos em branco.')
           } finally {
               expect.assertions(1)
           }
     })
})