import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hbcbc_list = createAsyncThunk(
  "hBcbcs/api_v1_hbcbc_list",
  async payload => {
    const response = await apiService.api_v1_hbcbc_list(payload)
    return response.data
  }
)
export const api_v1_hbcbc_create = createAsyncThunk(
  "hBcbcs/api_v1_hbcbc_create",
  async payload => {
    const response = await apiService.api_v1_hbcbc_create(payload)
    return response.data
  }
)
export const api_v1_hbcbc_retrieve = createAsyncThunk(
  "hBcbcs/api_v1_hbcbc_retrieve",
  async payload => {
    const response = await apiService.api_v1_hbcbc_retrieve(payload)
    return response.data
  }
)
export const api_v1_hbcbc_update = createAsyncThunk(
  "hBcbcs/api_v1_hbcbc_update",
  async payload => {
    const response = await apiService.api_v1_hbcbc_update(payload)
    return response.data
  }
)
export const api_v1_hbcbc_partial_update = createAsyncThunk(
  "hBcbcs/api_v1_hbcbc_partial_update",
  async payload => {
    const response = await apiService.api_v1_hbcbc_partial_update(payload)
    return response.data
  }
)
export const api_v1_hbcbc_destroy = createAsyncThunk(
  "hBcbcs/api_v1_hbcbc_destroy",
  async payload => {
    const response = await apiService.api_v1_hbcbc_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hBcbcsSlice = createSlice({
  name: "hBcbcs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_hbcbc_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hbcbc_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hbcbc_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hbcbc_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hbcbc_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hbcbc_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hbcbc_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hbcbc_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_hbcbc_list,
  api_v1_hbcbc_create,
  api_v1_hbcbc_retrieve,
  api_v1_hbcbc_update,
  api_v1_hbcbc_partial_update,
  api_v1_hbcbc_destroy,
  slice: hBcbcsSlice
}
